var http = require('http');
var server = http.createServer();

server.on('request', function (req, res) {
	if (req.url == '/login') {
		// res.setHeader('Content-Type', 'text/plain; charset=utf-8')
		console.log('请求地址是：', req.socket.remoteAddress, req.socket.remotePort)
		res.end('str')
	} else if (req.url == '/out') {
		res.setHeader('Content-Type', 'text/html; charset=utf-8')
		res.end('<h1>你好我是h1</h1>')
	} else {
		res.end('456789')
	}
})

server.listen('3000', function () {
	console.log('server is starting...')
})