# 兼容问题

### IE11 语法错误页面空白问题
```js
	npm install babel-polyfil --save-dev //有说法不能安装在devDependencies
	//此处按vue-cli2为例
	//webpack-base-config.js修改配置
	module.exports = {
		entry: {
			app:['babel-polyfill','./src/main.js'] //修改处
		}，
		// 可能引用的第三方插件报错 SCRIPT1003 缺少 ":" 
		//如出现对该插件单独include处理一下
		// module: {
		// 	rules: [
		// 		{
		// 			test: /\.js$/,
		// 			loader: 'babel-loader',
		// 			include: [
		// 				resolve('node_modules/@packy-tang/vue-tinymce')
		// 			]
		// 		}
		// 	]
		// }
	}, 
```