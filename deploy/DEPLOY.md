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

## Updating the live site (every time)

Push to `main`, then from Johan's PC:

```bash
ssh -i ~/.ssh/lapanza_vps_deploy deploy@41.222.36.147 "bash /opt/zatoengineering/app/deploy/deploy-app.sh"
```

## First-time move from the old host (Domains.co.za cPanel)

1. **Before anything:** at Domains.co.za DNS, lower the TTL on the `@` and
   `www` A records to 300. Wait 24 hours.
2. First deploy (the script is not on the server yet, so clone it first):

   ```bash
   ssh -i ~/.ssh/lapanza_vps_deploy deploy@41.222.36.147
   sudo mkdir -p /opt/zatoengineering && sudo chown deploy:deploy /opt/zatoengineering
   git clone https://github.com/jbarkhuizen/zatoengineering.git /opt/zatoengineering/app
   bash /opt/zatoengineering/app/deploy/deploy-app.sh
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
