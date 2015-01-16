#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

rm -rf public || exit 0
mkdir public

# build
make

# config
git config --global user.email "nobody@nobody.org"
git config --global user.name "Travis CI"

# deploy
cd public
git init
git add .
git commit -m "Deploy to Github Pages"
git push --force "https://${GH_TOKEN}@${GH_REF}" master:gh-pages 2>&1
