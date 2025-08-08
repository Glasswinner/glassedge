#!/usr/bin/env bash
set -e

# 1) Build all HTML entrypoints into dist/, with relative URLs
npx parcel build \
  *.html \
  src/*.html \
  --dist-dir dist \
  --public-url ./

# 2) Sync every other static asset into dist/
#    Exclude your build scripts, config, source folders, node_modules, dist itself, etc.
rsync -av \
  --exclude='api/' \
  --exclude='src/' \
  --exclude='node_modules/' \
  --exclude='dist/' \
  --exclude='vercel-build.sh' \
  --exclude='vercel.json' \
  --exclude='package.json' \
  --exclude='package-lock.json' \
  --exclude='*.html' \
  ./ dist/
