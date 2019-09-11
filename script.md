# ES7新特性（2016）

## 1.Array.prototype.includes()
+ 验证数组中是否存在某个元素
- let arr = ['react', 'vue', 'anguar']
- arr.includes('react')

## 2.指数操作符
+ 指数运算符`**`与Math.pow(..)等效的计算结果
- Math.pow(2, 10) // 1024
- 2`**`10是等效的

# ES8新特性（2017）

## 1.async/await

* await可以和for...of循环一起使用，串行的方式运行异步操作。
- async function process (array) {
-		for await (let i of array) {
-			dosomething(i)
- 	}
- }

## 2.Object.values()

* Object.values()与Object.keys()类似，返回Object自身属性的所有值，但不包括继承的值
- let obj1 = {
- 	a:1, b:2, b:3
- }
- Object.keys(obj1) // ['a', 'b', 'c']
- Object.values(obj1) // [1, 2, 3]

## 3.Object.entries()

* 返回一个给定对象自身可枚举属性的键值对的数组
- console.log(Object.entries(obj1)) // [[a,1],[b,2],[c,3]]
- for (let [key, value] of Object.entries(obj1)) {
-		console.log(`key: ${key} value:${value}`)
- }

## 4.String padding: padStart()和padEnd(),填充字符串达到当前长度

### ES8中新增了两个实例函数String.prototype.padStart和String.prototype.padEnd,允许将空字符串或其他字符串添加到原始字符串的开头和结尾
* String.padStart(targetLength, [padString])
* String.padEnd(targetLength, [padString])
* targetLength:当前字符串需要填充到的目标长度。如果这个值小于当前字符串的长度，则返回当前字符串本身。
* padString:(可选)填充字符串，如果字符串太长，使用填充后的字符串长度超过了目标长度，则只保留最左侧部分，其他部分会被截断，此参数的缺省值为''。

- '0.0'.padStart(4, '10') // 10.0
- '0.0'.padStart(20) // 0.00

- '0.0'.padEnd(4, '0') // 0.00
- '0.0'.padEnd(10, '0') // 0.0000000

## 5.函数参数列表结尾允许逗号

- 主要作用是方便使用git进行多人协作开发时修改同一个函数减少不必要的行变更。

## 6.Object.getOwnPropertyDescriptors()

* Object.getOwnPropertyDescriptors()函数用来获取一个对象的所有自身属性的描述符,如果没有任何自身属性，则返回空对象。
- Object.getOwnPropertyDescriptors(obj)

## 7.ShareArrayBuffer和Atomics对象，用于从共享内存位置读取和写入

* SharedArrayBuffer 对象用来表示一个通用的，固定长度的原始二进制数据缓冲区，类似于 ArrayBuffer 对象，它们都可以用来在共享内存（shared memory）上创建视图。与 ArrayBuffer 不同的是，SharedArrayBuffer 不能被分离。
- new ShareArrayBuffer(length)


# ES9新特性(2018)

## 异步迭代

* async/await的某些时刻，在同步的循环中调用异步函数
- async function process(array) {
-   for await (let i of array) {
-     doSomething(i);
-   }
- }

## Promise.finally()

* 一个Promise调用链要么成功到达最后一个.then()，要么失败触发.catch()。在某些情况下，你想要在无论Promise运行成功还是失败，运行相同的代码，例如清除，删除对话，关闭数据库连接等。
-	function doSomething() {
-	  doSomething1()
-   .then(doSomething2)
-   .then(doSomething3)
-   .catch(err => {
-     console.log(err);
-   })
-   .finally(() => {
-     // finish here!
-   });
- }

## Rest/Spread属性

## 正则表达式明明捕获组（Regular Expression Named Capture Groups）

## 正则表达式反向断言（lookbehind）

## 正则表达式dotAll模式

## 正则表达式 Unicode 转义

## 非转义序列的模板字符串