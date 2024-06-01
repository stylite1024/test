#!/bin/bash

# 前提
# nvm install  20
# npm install -g pnpm
# pnpm install

# config
DEPLOY_DIR="/data/app/web/wwwroot/oby.ink"
HOST="master.oby.ink"

# package
pnpm docs:build


# deploy
cd  src/.vuepress/
pwd
tar zcf dist.tar.gz  dist
scp dist.tar.gz  root@${HOST}:${DEPLOY_DIR}
ssh root@${HOST} "cd ${DEPLOY_DIR};tar xf dist.tar.gz ;chown -R www.www dist"

# git push
cd -
git add .
git commit -m "update docs"
git push