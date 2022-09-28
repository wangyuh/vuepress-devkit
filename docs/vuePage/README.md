---
title: "vue常用方法"
sidebar: auto
sidebarDepth: 2
---
## wacth(监听)
- 使用方法
```js
	watch: {
		watchObj: {
			handler(newName, oldName) {
				//
			},
			deep: true, //深入监听
			immediate: true //第一次执行
	    }
	}
```
#### 但是数组在下面两种情况下无法监听：
- 利用索引直接设置数组项时，例如arr[index]=newValue
- 修改数组的长度时，例如arr.length=newLength
#### 解决方法：使用$set
- this.$set(arr, index, newValue)

## $router 和$route 区别
#### 1.router是VueRouter的一个对象，通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。
- 举例：history对象
- $router.push({path:'home'});本质是向history栈中添加一个路由，在我们看来是 切换路由，但本质是在添加一个history记录
- 方法：
- $router.replace({path:'home'});//替换路由，没有历史记录
#### 2.route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name,path,params,query等
- 我们可以从vue devtools中看到每个路由对象的不同
#### 2、如何获取所有route对象
- this.$router.options.routes

## filters 过滤用法
```js
	<template>
	 <div>{{value | filter(parmas)}}</div>
	</template>
	<script>
		export default {
			filters: {
				filter(value, parmas) =>{
					// 这里this不指向全局，可以用传参方式传
					return '过滤后参数'
				}
			}
		}
	</script>
```





