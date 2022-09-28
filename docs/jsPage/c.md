# 常用方法集
```js 
	/**
	* @desc 函数防抖
	*@param fn 事件触发的操作
	*@param delay 多少毫秒内连续触发事件，不会执行
	*@returns {Function}
	*/ 
	export function debounce(fn, delay){
		let timer = null; //借助闭包
		return function(){
			let context = this,
			args = arguments;
			timer && clearTimeout(timer);
			timer = setTimeout(function(){
				fn.apply(context, args);
			},delay);
		} 
	}
	// 使用
	// function showTop() {
	// 	let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;　　
	// 	console.log('滚动条位置：' + scrollTop);
	// }
	// window.onscroll = debounce(showTop,200);
	
	/**
	* @desc节流函数
	* @param fn 事件触发的操作
	* @param delay 间隔多少毫秒需要触发一次事件
	*/
	//基本原理
	export function throttle(fn, delay) {
		let valid = true;
		return function() {
		let context = this;
		let args = arguments;
		if (!valid) {
			return;
		}
		valid = false;
		setTimeout(() => {
			fn.apply(context, args);
			valid = true;
		}, delay);
	  }
	}
	//时间戳方式
	export function throttle1(fn, delay) {
		let prev = new Date();
		return function() {　
			let context = this;
			let args = arguments;
			let now = new Date();
			if (now - prev >= delay) {
				fn.apply(context, args);
				prev = new Date();
			}
		}
	}
	//定时器方式
	export function throttle2(fn, delay) {
		let timer = null;
		return function() {
			let context = this;
			let args = arguments;
			if (!timer) {
				timer = setTimeout(function() {
					fn.apply(context, args);
					clearTimeout(timer);
				}, delay)
			}
		}
	}
	//使用
	// function showTop() {
	// 	let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;　　
	// 	console.log('滚动条位置：' + scrollTop);
	// }
	// window.onscroll = throttle(showTop,200);
	
	/**
	* @desc 深拷贝函数
	* @param source 拷贝对象
	*/
	export function deepClone(source) {
		if(!source && typeof source !== 'object') {
			throw new Error('error arguments', 'deepClone')
		}
		const targetObj = source.constructor === Array ? [] : {}
		Object.keys(source).forEach(keys => {
			if(source[keys] && typeof source[keys] === 'object') {
				targetObj[keys] = deepClone(source[keys])
			} else {
				targetObj[keys] source[keys]
			}
		})
		return targetObj
	}
	// 使用
	//let obj = deepClone(obj)
```
