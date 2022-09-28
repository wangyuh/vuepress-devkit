module.exports = {
  title: '个人主页',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'JS', link: '/jsPage/'},
      {text: 'lealeft', link: '/lealeft/'},		   
      {text: 'demo', link: '/demo/'},		   
      {text: 'git命令', link: '/gitCmd/'},		   
      {text: 'vue', link: '/vuePage/'},
	  {text: '前端知识', link: '/webPage/'},
    ],
    sidebar:{
        '/jsPage/': [
          {
            title: '目录',
            children: [
              '/jsPage/a', 
              '/jsPage/b',
			  '/jsPage/d',
              '/jsPage/c', 
            ]
          }
        ],
		'/lealeft/': [
			{
			  title: '目录',
			  children: [
			    '/lealeft/a',
			  ]
			}
		],
		'/webPage/': [
			{
			  title: '目录',
			  children: [
			    '/webPage/a',
			    '/webPage/b',
			  ]
			}
		]
    },
    sidebarDepth: 2
  }
};