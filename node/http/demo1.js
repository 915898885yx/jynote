const fs = require('fs')
fs.readFile('./http.js', function (err, data) {
	if (err) {
		console.log('error')
	} else {
		console.log(data.toString(), 'data')
		var data1 = data.toString()
		fs.writeFile('./index.html', data.toString(), function (err) {
			if (!err) {
				console.log('写入成功');
			}
		})
	}
})
