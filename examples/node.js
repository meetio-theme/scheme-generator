const http = require('http');

const startServer = () => {
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  }).listen(8080);
}

module.exports = {
  start: startServer,
  port: 8080
}
