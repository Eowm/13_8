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
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.write('<img src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1447810665000/photosp/75b8edd4-d562-4698-8fd1-5e37afc70184/stock-photo-reflection-number-gold-brass-shine-address-internet-error-404-75b8edd4-d562-4698-8fd1-5e37afc70184.jpg">')
            response.end();
    }
});

server.listen(8080);