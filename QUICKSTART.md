# 🧮 React Native 计算器

一个简洁的 Android 计算器应用，支持基本的加减乘除运算。

## ✨ 功能

- ➕ 加法
- ➖ 减法  
- ✖️ 乘法
- ➗ 除法
- 🔄 清除功能
- 📱 现代化 UI 设计

## 🚀 快速部署到 GitHub

### 方法 1: 使用部署脚本（推荐）

```bash
./deploy.sh
```

然后按照提示操作。

### 方法 2: 手动部署

```bash
# 1. 初始化 Git
git init
git add .
git commit -m "Initial commit"
git branch -M main

# 2. 在 GitHub 创建新仓库后，添加远程地址
git remote add origin https://github.com/<你的用户名>/<仓库名>.git

# 3. 推送代码
git push -u origin main
```

## 📦 自动构建 APK

推送到 GitHub 后：

1. 进入你的仓库页面
2. 点击 **Actions** 标签
3. 等待构建完成（约 5-10 分钟）
4. 点击最新的 workflow run
5. 在 **Artifacts** 部分下载 `app-release`
6. 解压后得到 `app-release.apk`

## 🛠️ 本地开发

### 安装依赖

```bash
npm install
```

### 运行应用

```bash
# 启动 Metro bundler
npm start

# 在另一个终端运行 Android
npm run android
```

### 本地构建 APK

```bash
cd android
./gradlew assembleRelease
```

APK 位置：`android/app/build/outputs/apk/release/app-release.apk`

## 📱 安装到手机

1. 下载构建好的 APK
2. 在 Android 手机上启用"未知来源"安装
3. 传输 APK 到手机并安装

## 🔧 技术栈

- React Native 0.73
- React 18.2
- Android SDK 34

## 📝 注意事项

- APK 使用测试签名，仅用于开发和测试
- 生产环境需要使用正式的签名密钥
- 首次构建可能需要较长时间下载依赖

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
