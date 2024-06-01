import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "后端",
    icon: "circle-info",
    prefix: "/",
    children: [
      {
        text: "golang",
        icon: "signs-post",
        prefix: "backend/",
        children: ["golang/",]
      },
      {
        text: "java",
        icon: "signs-post",
        prefix: "backend/",
        children: ["java/", ]
      },
    ],
  },
  {
    text: "前端",
    icon: "lefttop-line",
    link: "/fontend/" 
  },
    {
    text: "运维",
    icon: "circle-info",
    prefix: "/ops/",
    children: [
      "kubernetes/","shell/",
      {
        text: "服务器",
        link: "server/"
      }
      ]
  },
  {
    text: "分类",
    icon: "book",
    link: "/category/",
  },
  {
    text: "标签",
    icon: "book",
    link: "/tag/",
  },
  {
    text: "归档",
    icon: "book",
    link: "/timeline/",
  },
  
  {
    text: "关于",
    icon: "book",
    link: "about.md",
  },
  {
    text: "友链",
    icon: "book",
    link: "links.md",
  },
]);
