#!/usr/bin/env bash
# Build all HTML files, polyfilling `process`
npx parcel build *.html \
  --dist-dir dist \
  --public-url ./ \
  --alias process=process/browser
