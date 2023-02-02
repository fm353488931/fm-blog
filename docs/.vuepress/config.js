module.exports = {
  title: "FANGMING的个人博客",
  description: "TypeScript4 最新官方文档翻译",
  base: "/fm-blog/",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/articles/notes" },
      {
        text: "Github",
        items: [{ text: "Github", link: "https://github.com/fm353488931" }],
      },
    ],
    sidebar: [
      {
        title: "基础学习",
        path: "/articles/notes",
        collapsable: false,
        children: [
          { title: "笔记", path: "/articles/notes" },
          { title: "手写方法", path: "/articles/handwriting" },
          { title: "JavaScript深入之从原型到原型链", path: "/articles/prototype" },
        ],
      },
    ],
  },
}
