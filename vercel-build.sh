#!/usr/bin/env bash
set -e

# 1) Bundle your HTML and JS into dist/
npx parcel build \
  *.html \
  src/*.html \
  --dist-dir dist \
  --public-url ./

# 2) Copy static assets—not your api/ folder
cp -R roleplaybanks dist/
cp -R data           dist/
cp -R grading        dist/
cp -R pdf            dist/
cp -R images         dist/
cp *.pdf dist/ || true
cp *.png dist/ || true
