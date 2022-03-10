module.exports = {
  title: "FANGMING的个人博客",
  description: "TypeScript4 最新官方文档翻译",
  base: "/fm-blog/",
  theme: "reco",
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "Github",
        items: [{ text: "Github", link: "https://github.com/fm353488931" }],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false,
        children: [{ title: "学前必读", path: "/" }],
      },
      {
        title: "基础学习",
        path: "/articles/prototype",
        collapsable: false,
        children: [
          { title: "JavaScript深入之从原型到原型链", path: "/articles/prototype" },
        ],
      },
    ],
  },
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
}
