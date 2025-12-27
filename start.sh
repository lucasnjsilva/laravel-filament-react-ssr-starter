#!/bin/bash
if [ ! -f bootstrap/ssr/ssr.js ]; then
  echo "SSR bundle not found. Building..."
  npm run build
fi

composer run dev
