#!/usr/bin/env sh

yarn build --base ./ &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@gitee.com:linmumujiayou/big-screen-website.git &&
git push -u -f origin master &&
cd ..;
