# Calculator App

React Native 计算器应用

## 部署到 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

## 自动打包

推送到 GitHub 后，GitHub Actions 会自动构建 APK。

在 GitHub 仓库页面：Actions → 最新的 workflow → Artifacts → 下载 app-release

## 本地构建

```bash
npm install
cd android
./gradlew assembleRelease
```

APK 位置：`android/app/build/outputs/apk/release/app-release.apk`
