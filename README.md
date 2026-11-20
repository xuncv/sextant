# 六分仪 · Sextant

> 把整片海，画成一条航线。

**Sextant（六分仪）** 是一个开源的远洋航海前端项目：把电子海图、风场、潮汐与船位放进同一块画布，
让航线规划从「凭经验」变成「可计算、可复现、可分享」。

仓库目前处于 **pre-alpha** 阶段，只有一套可运行的 React 前端骨架与页面骨架 —— 海图渲染、航路算法、
后端服务都还没有开始写。欢迎围观，也欢迎来提想法。

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)](https://vite.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-7-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-d8a24a.svg)](./LICENSE)

---

## 这是什么

一个航海项目的前端入口。当前版本只做了一件事：用一页「航海主题」的落地页把项目定位讲清楚，
并为后续模块预留好了入口与目录结构。

页面包含：

- **罗盘主视觉** —— 纯 SVG 绘制，指针缓慢摆动，支持 `prefers-reduced-motion`
- **海图式视觉语言** —— 深水底 + 黄铜色强调 + 经纬网格纹理
- **模块卡片** —— 电子海图 / 航线规划 / 航海日志，标注各自状态
- **响应式布局** —— 桌面双栏、移动端单栏

## 快速开始

需要 Node.js ≥ 20。

```bash
# 1. 克隆
git clone https://github.com/xuncv/sextant.git
cd sextant

# 2. 安装依赖
npm install

# 3. 启动开发服务器（默认 http://localhost:5173）
npm run dev
```

其他常用命令：

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动开发服务器（HMR） |
| `npm run build` | 类型检查 + 生产构建，产物在 `dist/` |
| `npm run preview` | 本地预览生产构建 |
| `npm run lint` | 用 oxlint 做静态检查 |

## 目录结构

```text
sextant/
├─ public/
│  └─ favicon.svg        # 罗盘图标
├─ src/
│  ├─ App.tsx            # 落地页：顶栏 / 主视觉 / 模块卡片 / 页脚
│  ├─ App.css            # 组件样式（罗盘、卡片、响应式）
│  ├─ index.css          # 全局主题变量与海图背景
│  └─ main.tsx           # React 入口
├─ index.html
├─ vite.config.ts
└─ package.json
```

## 技术选型

| 领域 | 选择 | 理由 |
| --- | --- | --- |
| 框架 | React 19 | 生态成熟，后续做海图画布组件时社区方案最多 |
| 构建 | Vite 8 | 冷启动快，配置面小 |
| 语言 | TypeScript | 航海数据字段多（坐标、时间、单位），类型是安全绳 |
| 样式 | 原生 CSS + 自定义属性 | 不引入运行时开销，主题色改一处即可换肤 |
| 静态检查 | oxlint | 快，够用 |

> 目前 **没有** 引入路由、状态管理、UI 组件库 —— 等真正有第二个页面时再说。

## 路线图

- [x] 项目骨架 & 主题设计
- [x] 落地页与模块占位
- [ ] 电子海图渲染（Canvas / WebGL，S-57 物标简化版）
- [ ] 航线计算：大圆航法、恒向线、分段航向与航时
- [ ] 风场 / 洋流叠加图层
- [ ] 船位接入（NMEA 0183 / AIS 报文）
- [ ] 航海日志与 GPX 导出
- [ ] 部署到 GitHub Pages

## 参与

这是一个还在找方向的个人项目。如果你也在折腾航海、地图或可视化，欢迎：

1. 在 [Issues](https://github.com/xuncv/sextant/issues) 里聊聊你的想法 —— 尤其是「航线规划到底该长什么样」；
2. Fork 之后开分支、提 PR，请保持提交信息清晰（`feat: ...` / `fix: ...` / `docs: ...`）；
3. 提交前跑一遍 `npm run build` 和 `npm run lint`。

## 许可证

[MIT](./LICENSE) © 2026 xuncv

---

<sub>风吹向哪里，航线就从哪里开始。</sub>
