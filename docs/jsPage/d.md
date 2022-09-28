# fileReader用法
#### 用途如：
- 上传后的文件内容读取
```js
	let reader = new FileReader()
	reader.onload = (e) => {
		console.log(JSON.parse(e.target.result))
	}
	reader.readAsText(file.raw) //el-upload 上传后的文件读取
	// reader.readAsDataURL(blobInfo.blob()); file或blob转base64
```