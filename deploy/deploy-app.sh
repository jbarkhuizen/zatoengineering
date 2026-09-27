#!/usr/bin/env bash
# Run as the "deploy" user on the shared VPS (already bootstrapped for
# lapanza3d / procomsolutions / barkie). First run clones the repo; later runs
# pull, rebuild and publish.
#
#   ssh -i ~/.ssh/lapanza_vps_deploy deploy@<VPS_IP>
#   bash /opt/zatoengineering/app/deploy/deploy-app.sh

set -euo pipefail

REPO_URL="${ZATO_REPO_URL:-https://github.com/jbarkhuizen/zatoengineering.git}"
BASE_DIR="/opt/zatoengineering"
APP_DIR="$BASE_DIR/app"
WWW_DIR="$BASE_DIR/www"

if [ ! -d "$APP_DIR/.git" ]; then
  sudo mkdir -p "$BASE_DIR" && sudo chown deploy:deploy "$BASE_DIR"
  echo "==> Cloning repo (first run)"
  git clone "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"

echo "==> Pulling latest main"
git fetch origin
git checkout main
git pull --ff-only origin main

echo "==> Installing dependencies"
npm ci --no-audit --no-fund

echo "==> Building static site"
npm run build

# Swap the new build in whole so visitors never see a half-copied site.
echo "==> Publishing out/ to $WWW_DIR"
rm -rf "$WWW_DIR.new" "$WWW_DIR.old"
cp -a out "$WWW_DIR.new"
if [ -d "$WWW_DIR" ]; then mv "$WWW_DIR" "$WWW_DIR.old"; fi
mv "$WWW_DIR.new" "$WWW_DIR"
rm -rf "$WWW_DIR.old"

if [ ! -f /etc/nginx/conf.d/zatoengineering.conf ]; then
  echo "==> Installing nginx vhost (first run)"
  sudo cp deploy/nginx-zatoengineering.conf /etc/nginx/conf.d/zatoengineering.conf
else
  # certbot appends HTTPS blocks to the live file -- never overwrite it.
  echo "==> nginx vhost exists -- leaving /etc/nginx/conf.d/zatoengineering.conf as-is (certbot manages it)"
fi
sudo nginx -t
sudo systemctl reload nginx

echo ""
echo "==================================================================="
curl -fsS -o /dev/null -w "Local check: HTTP %{http_code}\n" -H "Host: www.zatoengineering.co.za" http://127.0.0.1/
echo "==================================================================="
