const ws = require('nodejs-websocket');

var server = ws.createServer(function (conn) {
	conn.on('text', function (str) {
		console.log(`接受到的消息为${str}`)
	})
	conn.send('123456789')
	setInterval(() => {
		conn.send('7894561234564855')
	}, 1000)
	conn.on('close', function (code, reason) {
		console.log('关闭链接')
	})

	conn.on('error', function (code, reason) {
		console.log('异常关闭')
	})
}).listen('8026', function () {
	console.log('listen ... ')
})