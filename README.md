# 简易 Google 风格搜索页面

这是一个简易的静态页面示例，模仿 Google 搜索主页的外观与基本交互。

主要文件：
- [index.html](index.html) — 页面主体
- [styles.css](styles.css) — 样式
- [script.js](script.js) — 简单交互（回车搜索、手气不错）

快速查看：

1. 在仓库根目录运行本地静态服务器：

```bash
python3 -m http.server 8000
```

2. 在浏览器打开 `http://localhost:8000`。

说明："手气不错"按钮尝试使用 Google 的 `btnI` 参数打开首个结果，可能因 Google 行为或 CORS/重定向策略而有不同表现。