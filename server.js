const http = require('http');

http.createServer((req, res) => {
  res.end('Hello Drone!');
}).listen(3000, () => {
  console.log('Listening to port 3000');
});

