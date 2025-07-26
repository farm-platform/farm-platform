#!/bin/bash
echo "===== 清理缓存 ====="
rm -rf node_modules .cache

echo "===== 安装依赖 ====="
npm install --legacy-peer-deps --unsafe-perm

echo "===== 检查 vue-tsc ====="
npm ls vue-tsc
npx vue-tsc --version

echo "===== 执行构建 ====="
npm run build

echo "===== 构建完成 ====="