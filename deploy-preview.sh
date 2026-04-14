#!/bin/bash
# Push to dev and immediately upload dist/ to Cloudflare Pages via Wrangler.
# Bypasses CF's slow build pipeline (~3min) — preview is live in seconds.
set -e

BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" != "dev" ] && [ "$BRANCH" != "main" ]; then
  echo "❌ Not on dev or main branch. Aborting."
  exit 1
fi

# Push to GitHub
git push origin "$BRANCH"

# Build if dist/ is stale (older than latest commit)
LATEST_COMMIT=$(git log -1 --format=%ct)
DIST_TIME=$(stat -c%Y dist/index.html 2>/dev/null || echo 0)
if [ "$DIST_TIME" -lt "$LATEST_COMMIT" ]; then
  echo "⚡ Building..."
  npm run build
fi

# Upload to Cloudflare Pages
echo "⚡ Uploading to Cloudflare Pages (branch: $BRANCH)..."
. /home/deploy/.secrets
CLOUDFLARE_ACCOUNT_ID=193f7a497a37609cd0be366ecbb19122 \
CLOUDFLARE_API_TOKEN=$CLOUDFLARE_PAGES_TOKEN \
npx wrangler pages deploy dist/ \
  --project-name=scripture-alive \
  --branch="$BRANCH" \
  --commit-dirty=true \
  2>&1 | tail -3
