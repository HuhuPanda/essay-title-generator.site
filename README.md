# 论文标题生成器 (Essay Title Generator)

一个帮助学生和研究人员快速生成专业论文标题的在线工具。

## 项目简介

论文标题生成器是一个基于 Web 的应用程序，旨在帮助学术写作者根据关键词快速创建专业、吸引人的论文标题。无论您是学生、教师还是研究人员，这个工具都能帮助您提高学术写作效率。

## 功能特点

- 根据输入的关键词生成专业的论文标题
- 多语言支持（英文、简体中文、繁体中文、日语）
- 响应式设计，适配各种设备
- 用户友好的界面
- 快速高效的标题生成算法

## 技术栈

- 前端：HTML, CSS, JavaScript
- 响应式设计
- 多语言支持

## 项目结构

```
essay-title-generator/  # 主要网站文件目录
├── index.html        # 网站首页
├── about.html        # 关于我们页面
├── faq.html          # 常见问题页面
├── css/              # 样式文件
├── js/               # JavaScript 文件
├── images/           # 图片资源
└── robots.txt        # 搜索引擎爬虫配置
```

## 本地运行

由于这是一个纯静态网站，您可以通过以下方式在本地运行：

1. 克隆仓库
```bash
git clone https://github.com/HuhuPanda/essay-title-generator.site.git
```

2. 直接在浏览器中打开 `essay-title-generator/index.html` 文件

或者使用任何静态文件服务器，例如：
- Python 的 HTTP 服务器：`python -m http.server`
- VS Code 的 Live Server 扩展
- 任何其他 Web 服务器（Apache, Nginx 等）

## 部署到 GitHub Pages

1. 确保您的仓库已设置为 GitHub Pages
   - 在仓库设置中，找到 "Pages" 选项
   - 选择 "GitHub Actions" 作为构建和部署的来源

2. 将代码推送到 GitHub 仓库的 main 分支
   ```bash
   git add .
   git commit -m "更新网站内容"
   git push
   ```

3. GitHub Actions 将自动部署您的网站
   - 部署过程可以在仓库的 "Actions" 选项卡中查看
   - 部署完成后，您的网站将可以通过 `https://[您的用户名].github.io/essay-title-generator.site` 访问

## 使用方法

1. 访问网站首页
2. 在输入框中输入您的论文关键词
3. 选择您的学术领域和论文类型
4. 点击"生成标题"按钮
5. 从生成的标题列表中选择最适合您的标题

## 自定义配置

### Google Analytics

网站已集成 Google Analytics 代码，但需要替换为您自己的 Google Analytics ID：

1. 在 Google Analytics（分析）官网创建账户并获取您的跟踪 ID（通常以 "G-" 开头）
2. 打开 `essay-title-generator/index.html` 文件
3. 找到 Google Analytics 代码部分（已被注释）
4. 取消注释并将 `G-XXXXXXXXXX` 替换为您的实际 Google Analytics ID

## 贡献指南

欢迎对本项目做出贡献！如果您有任何建议或发现了问题，请提交 issue 或 pull request。

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 LICENSE 文件。
