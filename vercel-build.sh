#!/usr/bin/env bash
set -e

# 1) Build all HTML entrypoints (root + src/) into dist/, with relative URLs
npx parcel build \
  *.html \
  src/*.html \
  --dist-dir dist \
  --public-url ./

# 2) Copy every static folder you listed into dist/
cp -R roleplaybanks dist/
cp -R data           dist/
cp -R grading        dist/
cp -R pdf            dist/
cp -R images         dist/

# 3) Copy any root-level PDFs and PNGs (like PMCG 1.pdf, *.png icons, etc.)
cp *.pdf dist/ || true
cp *.png dist/ || true
