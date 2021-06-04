#!/usr/bin/env bash

npm install
npm run build

git add .
git commit -m "Task1 Part2"
git push origin master
git status
