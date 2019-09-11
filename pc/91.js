const https = require('https');

// let options = {
// 	hostname: 'https://service.91autoparts.com',
// 	port: '',
// 	path: '/',
// 	method: 'POST'
// }

https.request('https://service.91autoparts.com/token', {
	password: "admin123",
	tag: "",
	username: "17310526744"
}, res => {
	res.on('data', check => {
		console.log(check)
	})
	res.on('end', end => {
		console.log(end)
	})
	console.log(res, 'resssssssssssssssss')
})
