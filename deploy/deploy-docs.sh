#!/usr/bin/env bash
# Publish the docs site where Nginx serves it.
# Nginx site for docs.drixalerp.com uses root /var/www/Aspire-Docs/current
# (see deploy/nginx-docs.conf).
# Expects VERSION and /tmp/drixal-docs/$VERSION/public.
set -euo pipefail

VERSION="${VERSION:-}"
if [[ ! "$VERSION" =~ ^docs\.[0-9]{8}\.[0-9]+$ ]]; then
  echo "Refusing to deploy. VERSION must look like docs.YYYYMMDD.N, got '${VERSION}'." >&2
  exit 1
fi

STAGING="/tmp/drixal-docs/${VERSION}"
ROOT="/var/www/Aspire-Docs"
RELEASE_DIR="${ROOT}/releases/${VERSION}"
CURRENT_LINK="${ROOT}/current"
SITE_NAME="${SITE_NAME:-docs.drixalerp.com}"

if [[ "$(id -u)" -ne 0 ]]; then
  sudo -n true
fi

run() {
  if [[ "$(id -u)" -eq 0 ]]; then
    "$@"
  else
    sudo -n "$@"
  fi
}

if [[ ! -f "${STAGING}/public/index.html" || ! -f "${STAGING}/public/deployment.json" ]]; then
  echo "Staged release is incomplete: ${STAGING}" >&2
  exit 1
fi

PREVIOUS=""
if [[ -L "$CURRENT_LINK" ]]; then
  PREVIOUS="$(readlink -f "$CURRENT_LINK" || true)"
elif [[ -d "$CURRENT_LINK" ]]; then
  PREVIOUS="${ROOT}/releases/previous-directory"
  run rm -rf "$PREVIOUS"
  run mv "$CURRENT_LINK" "$PREVIOUS"
fi

run mkdir -p "${ROOT}/releases"
run rm -rf "$RELEASE_DIR"
run mv "${STAGING}/public" "$RELEASE_DIR"
run chmod -R a+rX "$RELEASE_DIR"
run chown -R www-data:www-data "$RELEASE_DIR"
run ln -sfn "$RELEASE_DIR" "$CURRENT_LINK"
echo "Pointed ${CURRENT_LINK} at ${RELEASE_DIR}."

reload_nginx() {
  run nginx -t
  run systemctl reload nginx
  echo "Reloaded Nginx."
}

reload_nginx

rollback_site() {
  echo "Health check failed. Restoring the previous release." >&2
  if [[ -n "$PREVIOUS" && -d "$PREVIOUS" && "$PREVIOUS" != "$RELEASE_DIR" ]]; then
    run ln -sfn "$PREVIOUS" "$CURRENT_LINK"
    reload_nginx || true
    echo "Restored ${PREVIOUS}." >&2
  else
    echo "No previous release was available to restore." >&2
  fi
}

read_version() {
  python3 -c 'import json,sys
raw=sys.stdin.read().strip()
try:
    print(json.loads(raw or "{}").get("version",""))
except Exception:
    print("")'
}

served_version=""
served=""
attempt=1
while [[ "$attempt" -le 10 ]]; do
  served="$(curl -fsS "https://${SITE_NAME}/deployment.json" || true)"
  served_version="$(printf '%s' "$served" | read_version || true)"
  if [[ "$served_version" == "$VERSION" ]]; then
    break
  fi
  sleep 2
  attempt=$((attempt + 1))
done
if [[ "$served_version" != "$VERSION" ]]; then
  echo "https://${SITE_NAME}/deployment.json returned: ${served:-<empty>}" >&2
  rollback_site
  echo "https://${SITE_NAME}/deployment.json did not report ${VERSION}." >&2
  exit 1
fi

echo "Deployed ${VERSION} to ${CURRENT_LINK}."
run rm -rf "$STAGING"

# Keep the 5 newest releases.
current_target="$(readlink -f "$CURRENT_LINK")"
mapfile -t release_dirs < <(run bash -c "ls -1dt '${ROOT}/releases'/docs.*")
kept=0
for dir in "${release_dirs[@]}"; do
  kept=$((kept + 1))
  if [[ "$kept" -le 5 ]]; then
    continue
  fi
  if [[ "$(readlink -f "$dir")" == "$current_target" ]]; then
    continue
  fi
  run rm -rf "$dir"
done
