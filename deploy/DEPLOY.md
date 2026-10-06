# Deploying Zato Engineering (zatoengineering.co.za)

Zato runs **alongside** lapanza3d.co.za, procomsolutions.co.za and barkie.co.za
on the shared AlmaLinux 10 VPS (`41.222.36.147`, `deploy` user, SSH key
`~/.ssh/lapanza_vps_deploy` on Johan's PC).

It is a **pure static site** (Next.js `output: 'export'`). There is no Node
service, no port and no database. nginx serves files from disk.

| | |
|---|---|
| Repo checkout + build | `/opt/zatoengineering/app` |
| Live files (nginx root) | `/opt/zatoengineering/www` |
| nginx vhost | `/etc/nginx/conf.d/zatoengineering.conf` |

## Migration status (last updated 2026-10-06)

**2026-10-06:** DNS for `@` and `www` now points at the VPS (MX/SPF
unchanged). The site is serving from the VPS over **http only**: the
certbot step below is still outstanding, so https visitors get a
certificate error until it runs. Source updated to the 20 July version
(from `D:\Projects\Zato\zato-engineering`); all pages match the old live
site's text.

| Step | Status |
|---|---|
| Source recovered from old host, pushed to GitHub | Done (20 Jul version, 2026-10-06) |
| Point `@` + `www` A records to `41.222.36.147` | **Done (by support)** |
| certbot HTTPS certificate | **To do next (needs Johan's OK)** |
| Site built and published on VPS (`/opt/zatoengineering/www`) | Done |
| nginx vhost installed; all pages incl. `/contact/`-style URLs tested | Done |
| Old placeholder kept: `/opt/zatoengineering/app.pre-site-20260927114203`, `/etc/nginx/zatoengineering.conf.pre-site-*` | Done |
| Revoke leaked `RESEND_API_KEY` in Resend | **Johan: to do** |
| Delete `.next.zip`, `out.zip`, `.next/` from old host's web root | **Blocked: needs cPanel login** |
| Send/receive test email | To do |

### Where the old site and DNS actually live

- zatoengineering.co.za is **not** its own hosting package. It is an **addon
  domain inside the `barkie.co.za` cPanel** (Domains.co.za "CP Business",
  server `cp57.domains.co.za`, IP `169.239.218.57`).
- Its nameservers are `ns1-4.tld-ns.*`, so DNS is served from that
  **cPanel's Zone Editor**. The registrar's "Manage DNS" page for
  zatoengineering.co.za is empty and **editing it does nothing**.
- The client portal's hosting "Manage DNS" only shows the **barkie.co.za**
  zone, not the addon domains.
- The portal's one-click cPanel **Login** landed on the cPanel password page
  (single sign-on did not work).
- Web files: the addon domain's folder in that cPanel (the backup zip was
  named `zatoengineering.co.za/`).
- Mail: `MX mx1.tld-mx.com`, SPF `v=spf1 +a +mx include:_spf.tld-mx.com ~all`.
  Mail stays with Domains.co.za. **Do not change MX/TXT records.**
- The same cPanel also holds procomsolutions.co.za, lapanza.co.za,
  lapanza3d.co.za, johanbarkhuizen.co.za and n-a-i-l.co.za. **Do not cancel
  the barkie.co.za hosting** until every domain's DNS and email is accounted
  for.

### What to ask Domains.co.za support

> Please change the DNS for the addon domain **zatoengineering.co.za** on my
> barkie.co.za cPanel hosting (cp57): set the **A records for
> `zatoengineering.co.za` and `www.zatoengineering.co.za` to
> `41.222.36.147`** (my VPS). Please leave the MX, SPF/TXT and mail records
> unchanged. Also, the client-area cPanel "Login" button does not sign me in
> automatically. Can you check that?

Alternatively, reset the cPanel password (portal: hosting, Password,
Reset), log in to cPanel and use **Zone Editor** yourself.

### After DNS points at the VPS

```bash
nslookup www.zatoengineering.co.za   # must show 41.222.36.147
ssh -i ~/.ssh/lapanza_vps_deploy deploy@41.222.36.147 "sudo certbot --nginx -d zatoengineering.co.za -d www.zatoengineering.co.za"
```

Then check https, send a test email to `admin@zatoeng.co.za` (that address
is correct and intentional), and delete `.next.zip`, `out.zip` and `.next/`
from the old cPanel folder.

## Updating the live site (every time)

Push to `main`, then from Johan's PC:

```bash
ssh -i ~/.ssh/lapanza_vps_deploy deploy@41.222.36.147 "bash /opt/zatoengineering/app/deploy/deploy-app.sh"
```

## First-time move from the old host (Domains.co.za cPanel)

1. **Before anything:** at Domains.co.za DNS, lower the TTL on the `@` and
   `www` A records to 300. Wait 24 hours.
2. First deploy (the script is not on the server yet, so send it over SSH).
   It moves the old placeholder page and vhost aside, never deletes them:

   ```bash
   ssh -i ~/.ssh/lapanza_vps_deploy deploy@41.222.36.147 "bash -s" < deploy/deploy-app.sh
   ```

3. Test before switching DNS. On Johan's PC, add this line to
   `C:\Windows\System32\drivers\etc\hosts` (Notepad as admin):

   ```
   41.222.36.147  zatoengineering.co.za www.zatoengineering.co.za
   ```

   Open `http://www.zatoengineering.co.za` and check Home, About, Products,
   Contact, logo and the 3D hero. Then **remove that line again**.
4. Cutover: at Domains.co.za DNS change **only** the `@` and `www` A records
   to `41.222.36.147`. **Do not touch MX, SPF (TXT) or any mail records.**
   Email stays with Domains.co.za.
5. Once `nslookup www.zatoengineering.co.za` shows `41.222.36.147`:

   ```bash
   sudo certbot --nginx -d zatoengineering.co.za -d www.zatoengineering.co.za
   ```

   Choose "redirect" so http goes to https.
6. Check `https://www.zatoengineering.co.za`, then send and receive a test email.
7. Keep the old cPanel hosting for at least a week as a rollback (point the
   A records back). Before cancelling it, confirm that email is on a plan that
   survives the hosting cancellation.
8. Put the TTL back to 3600.

## Known issues (moved as-is)

- **Contact form does not send.** It posts to `/api/send`, which cannot
  exist in a static export (it also 404s on the old host). The old route is
  kept in `docs/contact-api-route.ts.txt` for the follow-up fix. Phone,
  WhatsApp and email links work.
- The `RESEND_API_KEY` from the old host was exposed publicly and must be
  treated as compromised. Revoke it in Resend and never commit the new one.

## Troubleshooting

- nginx: always `sudo nginx -t` before `sudo systemctl reload nginx`. A
  broken config would take down **every** site on the box.
- Logs: `sudo tail -n 100 /var/log/nginx/error.log`
