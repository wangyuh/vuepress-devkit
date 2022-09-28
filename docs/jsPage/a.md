# 将数组或者字符串或者对象分割成每n个一组的二维数组方法
```js
	function transTwoArry(str,num){
        var data,result = [];
        if(str instanceof Array){
            data = str;
        }else if(typeof str == "string"){
            data = str.split(",")
        }else{
            data = Object.entries(str);
        }
        if(typeof num == "string"){num = Number(num)};
        for(var i=0,len=data.length;i<len;i+=num){
            result.push(data.slice(i,i+num));
        }
        return result;
    }
```