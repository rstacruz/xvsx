#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

rm -rf public || exit 0
mkdir public

# build
make

# deploy
cd public
git init
git add .
git commit -m "Deploy to Github Pages" --author "Travis CI <nobody@nobody.org>"
git push --force "https://${GH_TOKEN}@${GH_REF}" master:gh-pages 2>&1
