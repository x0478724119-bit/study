#!/bin/bash
# 发布网站：给 common.js / style.css 加版本号（避免 iPad 用旧缓存），然后提交推送
cd "$(dirname "$0")"
V=$(date +%s)
sed -i '' -E "s/(common\.js|style\.css)(\?v=[0-9]+)?\"/\1?v=$V\"/g" index.html quiz.html handbook.html lessons.html admin.html book.html planner.html py.html
git add -A
git -c user.name="x0478724119-bit" -c user.email="x0478724119-bit@users.noreply.github.com" commit -qm "${1:-update}"
git pull -q --rebase origin main || { echo "PULL FAILED"; exit 1; }  # 后台可能改过 data/*.js，先合并
git push -q && echo "pushed v=$V" || { echo "PUSH FAILED"; exit 1; }
C=$(git rev-parse --short=7 HEAD)
for i in $(seq 1 30); do
  r=$(~/.local/bin/gh api repos/x0478724119-bit/study/pages/builds/latest --jq '.status+" "+.commit[0:7]' 2>/dev/null)
  [ "$r" = "built $C" ] && echo "live: $C" && exit 0
  curl -s -o /dev/null --max-time 8 https://10.255.255.1
done
echo "still building, check later"
