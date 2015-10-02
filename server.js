var express = require('express'),
	app = express();

app.get('/', function (req, res) {
	res.send('Server ready :)')
})

app.listen(3000, function () {
	console.log('Server running listening on port 3000')
})