#!/usr/bin/env bash
set -e

# Bundle every HTML entrypoint into dist/, with relative URLs
npx parcel build \
  *.html \
  src/*.html \
  --dist-dir dist \
  --public-url ./
