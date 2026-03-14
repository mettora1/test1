#!/bin/bash

echo "🚀 部署 React Native 计算器到 GitHub"
echo ""

# 检查是否已经初始化 git
if [ ! -d .git ]; then
    echo "📦 初始化 Git 仓库..."
    git init
    git branch -M main
fi

# 添加所有文件
echo "📝 添加文件..."
git add .

# 提交
echo "💾 提交代码..."
git commit -m "Initial commit: React Native Calculator App"

# 提示用户添加远程仓库
echo ""
echo "✅ 本地准备完成！"
echo ""
echo "📌 下一步："
echo "1. 在 GitHub 上创建新仓库"
echo "2. 运行以下命令推送代码："
echo ""
echo "   git remote add origin https://github.com/<你的用户名>/<仓库名>.git"
echo "   git push -u origin main"
echo ""
echo "3. 推送后，GitHub Actions 会自动构建 APK"
echo "4. 在 Actions 标签页下载构建好的 APK"
