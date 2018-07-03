var fs = require('fs');
var http = require('http');

var server = http.createServer();


server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
		fs.readFile('./index.html', (err, data) => {
  			if (err) throw err;
  			response.write(data);
		});
    } else {
    	response.setHeader("Content-Type", "image/png; charset=utf-8");
    	fs.readFile('./404.png', (err, data) => {
  			if (err) throw err;
  			response.write(data);
		});
    }
});

server.listen(8080);