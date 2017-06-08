#!/bin/bash

find . -name "*.js" -type f -and -not -path "./node_modules/*" -and -not -path "./rollup.config.js" -delete
find . -name "*.js.map" -type f -not -path "./node_modules/*" -delete
find . -name "*.d.ts" -type f -not -path "./node_modules/*" -delete
find . -name "*.metadata.json" -type f -not -path "./node_modules/*" -delete
find . -name "social-share.umd.js" -delete
rm -rf .rpt2_cache/
