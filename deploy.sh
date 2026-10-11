#!/bin/bash
# 发布网站：给 common.js / style.css 加版本号（避免 iPad 用旧缓存），然后提交推送
cd "$(dirname "$0")"
V=$(date +%s)
sed -i '' -E "s/(common\.js|style\.css)(\?v=[0-9]+)?\"/\1?v=$V\"/g" index.html quiz.html handbook.html
git add -A
git -c user.name="x0478724119-bit" -c user.email="x0478724119-bit@users.noreply.github.com" commit -qm "${1:-update}"
git push -q && echo "pushed v=$V"
