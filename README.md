# Xinze Liu's Homepage

个人主页，部署于 GitHub Pages。纯静态页面，无需构建。

## 如何更新内容

**只需要编辑 `data.js`**，里面每个板块都有注释说明：

| 板块 | 字段 |
| --- | --- |
| 基本信息 / 头像 / 链接 | `profile` |
| 个人简介、研究兴趣 | `bio`、`interests` |
| 动态 | `news` |
| 论文 | `publications` |
| 项目 | `projects` |
| 科研经历 / 教育 / 荣誉 | `experience`、`education`、`honors` |

- 某个板块数组为空 `[]`，该板块就自动隐藏；链接留空 `""` 则不显示。
- 图片（头像、论文配图）放在 `assets/img/`，在 `data.js` 中写相对路径。
- 论文作者里和 `profile.name` 一致的名字会自动加粗。

## 本地预览

直接双击打开 `index.html` 即可；或者：

```bash
python3 -m http.server 8000   # 然后访问 http://localhost:8000
```

## 文件结构

```
index.html        页面骨架（一般不用改）
data.js           ← 所有内容都在这里
assets/style.css  样式（配色在文件顶部 :root 中）
assets/main.js    渲染逻辑（一般不用改）
assets/img/       图片
```
