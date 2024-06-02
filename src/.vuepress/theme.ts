import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar.js'
import sidebar from './sidebar.js'


export default hopeTheme({
	hostname: 'https://www.oby.ink',
	fullscreen: true,
	author: {
		name: '花落南国北亭凉',
		url: 'https://oby.ink',
	},

	navbarIcon: false,

	iconAssets: 'fontawesome-with-brands',

	logo: 'logo.png',

	repo: 'stylite1024',

	docsDir: 'src',

	// 导航栏
	navbar,

	// 侧边栏
	sidebar,
	

	
	// 页脚
	footer: '本站总访问量<span id="busuanzi_value_site_pv"></span>次&nbsp; 本站访客数<span id="busuanzi_value_site_uv"></span>人次&nbsp; 本文总阅读量<span id="busuanzi_value_page_pv"></span>次',
	displayFooter: true,

	// 博客相关
	blog: {
		description: '路漫漫其修远兮，吾将上下而求索',
		intro: '/intro.html',
		medias: {
			Email: 'ou5156@163.com',
			Gitee: 'https://gitee.com/stylite1024',
			GitHub: 'https://github.com/stylite1024',
			WechatMP: 'wx.png',
		},
		avatar: 'fendou.jpg',
		name: 'Stylite1024',
	},

	// 加密配置
	encrypt: {
		config: {
			'/demo/encrypt.html': ['1234'],
		},
	},

	// 多语言配置
	// metaLocales: {
	// 	editLink: false,
	// },
	editLink: false,

	// 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
	hotReload: true,

	// 在这里配置主题提供的插件
	plugins: {
		copyright: true,
		blog: true,
		// 搜索
		searchPro: {
			// 索引全部内容
			indexContent: true,
		},
		// 启用之前需安装 @waline/client
		// 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
		comment: {
			provider: 'Giscus',
			repo: 'stylite1024/test',
			repoId: 'R_kgDOMDsIow',
			category: 'General',
			categoryId: 'DIC_kwDOMDsIo84Cfymw',
			mapping: 'og:title',
			reactionsEnabled: true,
			strict: true,
			inputPosition: 'bottom',
		},
		feed: {
			rss: true,
		},
		readingTime: false,
		seo: true,
		components: {
			components: ['Badge', 'VPCard', 'SiteInfo'],
		},

		// 此处开启了很多功能用于演示，你应仅保留用到的功能。
		mdEnhance: {
			align: true,
			attrs: true,
			codetabs: true,
			component: true,
			demo: true,
			figure: true,
			imgLazyload: true,
			imgSize: true,
			include: true,
			mark: true,
			stylize: [
				{
					matcher: 'Recommended',
					replacer: ({ tag }) => {
						if (tag === 'em')
							return {
								tag: 'Badge',
								attrs: { type: 'tip' },
								content: 'Recommended',
							}
					},
				},
			],
			sub: true,
			sup: true,
			tabs: true,
			tasklist: true,
			vPre: true,

			// 在启用之前安装 chart.js
			// chart: true,

			// insert component easily

			// 在启用之前安装 echarts
			// echarts: true,

			// 在启用之前安装 flowchart.ts
			// flowchart: true,

			// gfm requires mathjax-full to provide tex support
			// gfm: true,

			// 在启用之前安装 katex
			// katex: true,

			// 在启用之前安装 mathjax-full
			// mathjax: true,

			// 在启用之前安装 mermaid
			// mermaid: true,

			// playground: {
			//   presets: ["ts", "vue"],
			// },

			// 在启用之前安装 reveal.js
			// revealJs: {
			//   plugins: ["highlight", "math", "search", "notes", "zoom"],
			// },

			// 在启用之前安装 @vue/repl
			// vuePlayground: true,

			// install sandpack-vue3 before enabling it
			// sandpack: true,
		},

		// 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
		// pwa: {
		//   favicon: "/favicon.ico",
		//   cacheHTML: true,
		//   cachePic: true,
		//   appendBase: true,
		//   apple: {
		//     icon: "/assets/icon/apple-icon-152.png",
		//     statusBarColor: "black",
		//   },
		//   msTile: {
		//     image: "/assets/icon/ms-icon-144.png",
		//     color: "#ffffff",
		//   },
		//   manifest: {
		//     icons: [
		//       {
		//         src: "/assets/icon/chrome-mask-512.png",
		//         sizes: "512x512",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-mask-192.png",
		//         sizes: "192x192",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-512.png",
		//         sizes: "512x512",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-192.png",
		//         sizes: "192x192",
		//         type: "image/png",
		//       },
		//     ],
		//     shortcuts: [
		//       {
		//         name: "Demo",
		//         short_name: "Demo",
		//         url: "/demo/",
		//         icons: [
		//           {
		//             src: "/assets/icon/guide-maskable.png",
		//             sizes: "192x192",
		//             purpose: "maskable",
		//             type: "image/png",
		//           },
		//         ],
		//       },
		//     ],
		//   },
		// },
	},
})
