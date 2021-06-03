#!/usr/bin/env bash

set -e

scssFiles=()

while IFS="" read -r line; do
  scssFiles+=("$line")
done < <(find . -name "*.scss")

for scssFile in "${scssFiles[@]}"; do
  if [[ $(basename "$scssFile") =~ ^_ ]]; then
    continue
  fi

  tsFileName=${scssFile//.scss/-css.ts}
  tsDirName="$(basename "$(dirname "$tsFileName")")"

  if [[ $tsDirName != "src" ]]; then
    continue
  fi

  node ../../scripts/scss-to-ts.js -s "$scssFile" -o "$tsFileName"
done
