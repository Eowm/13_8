var fs = require('fs');
var http = require('http');

var server = http.createServer();


server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
    	fs.writeFile('./index.html', function(err) {
		 if (err) throw err;
  		console.log('The file has been saved!');
		});
		response.write('<html>');
		response.write('<body>');
		response.write('<h1>Hello, World!</h1>');
		response.write('</body>');
		response.write('</html>');
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.write('<img src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1447810665000/photosp/75b8edd4-d562-4698-8fd1-5e37afc70184/stock-photo-reflection-number-gold-brass-shine-address-internet-error-404-75b8edd4-d562-4698-8fd1-5e37afc70184.jpg">')
            response.end();
    }
});

server.listen(8080);