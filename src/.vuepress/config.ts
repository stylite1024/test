import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { baiduAnalyticsPlugin } from '@vuepress/plugin-baidu-analytics'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
	base: '/',

	lang: 'zh-CN',
	title: '花落南国北亭凉',
	description: '路漫漫其修远兮，吾将上下而求索',
	head: [
		[
			'script',
			{},
			`var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?f87cd311277311cf18c173a0fc2a0f5c";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
		],
		[
			'script',
			{},
			`var el = document.createElement("script");
			el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?76efa8e23f544c309624f0cbf34961dee93ba407aba0131d23e6daed5b008fa419d1c501ebd3301f5e2290626f5b53d078c8250527fa0dfd9783a026ff3cf719";
			el.id = "ttzz";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(el, s);`,
		],
		[
			'script',
			{ nonce: '5UFQMO7eghdAN_-PNQfKSQ' },
			`(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`,
		],
		[
			'script',
			{
				src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
			},
		],
		[
			'script',
			{},
			`document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("busuanzi_value_site_uv"),t=document.getElementById("busuanzi_value_site_pv"),n=new MutationObserver(e=>{for(let t of e)if("childList"===t.type){n.disconnect(),t.target.innerHTML=parseInt(t.target.innerHTML)+1e5;break}}),i=new MutationObserver(e=>{for(let t of e)if("childList"===t.type){i.disconnect(),t.target.innerHTML=parseInt(t.target.innerHTML)+3e5;break}}),r={childList:!0};n.observe(e,r),i.observe(t,r)});`
		],
		[
			'meta',
			{
				name: 'google-adsense-account',
				content: 'ca-pub-7505818998713036',
			},
		],
		[
			'meta',
			{
				name: 'google-site-verification',
				content: 'Z6nQhTsyP0BZ9sNLSds0kXqsuacRwoy9pkM6z58VJhI',
			},
		],
		[
			'meta',
			{
				name: 'msvalidate.01',
				content: 'EEB35C8FD0B7CF1340BBCF445754E966',
			},
		],
		[
			'meta',
			{
				name: '360-site-verification',
				content: '7e1042bbf5b3d59589a26b36d3fbce03',
			},
		],
		[
			'meta',
			{
				name: 'bytedance-verification-code',
				content: 'XRUqkWoF6nfdoZFhLi4V',
			},
		],
		['meta', { name: 'google-adsense-account', content: 'ca-pub-7505818998713036' }],
		['meta', { name: 'baidu-site-verification', content: 'codeva-tjBumlnkpW' }],
		['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
	],
	plugins: [
		baiduAnalyticsPlugin({
			// 配置项
			id: 'f87cd311277311cf18c173a0fc2a0f5c',
		}),
		googleAnalyticsPlugin({
			// 配置项
			id: 'G-MC6TBBGNQT',
		}),
	],
	theme,
	// 和 PWA 一起启用
	// shouldPrefetch: false,
})
