const http = require('http');

const requestListener = function(req, res) {
  res.writeHead(200);
  switch(req.url) {
    case '/blog':
      res.end('<h1>Blog</h1>');
      break;
    default:
      res.end('<h1>Hello, World!</h1>');
      break;
  }
}

const server = http.createServer(requestListener);
server.listen(3000);