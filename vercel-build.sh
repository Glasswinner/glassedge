#!/usr/bin/env bash
npx parcel build \
  *.html \
  --dist-dir dist \
  --public-url ./ \
  --no-hmr
