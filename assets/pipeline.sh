#!/usr/bin/env bash

if [ "$(python commentCheck.py)" = 0 ]; then
        echo "Name comment is not included!"
        exit 2
fi
echo "Name comment check pass"
npm install
npm run build

npm run test
if [ $? -eq 0 ]
then
  echo "SUCCESS BUILD"
else
  echo "FAIL"
  exit 2
fi
echo "Test Good"

git add .
git commit -m "Added one comment"
git push origin master
git status

