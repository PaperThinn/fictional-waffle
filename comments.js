// Create web server
// Create a web server that listens to requests on port 3000. When a request comes in, it should respond with the message "Hello, World!".

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello, World!');
});

server.listen(3000);
console.log('Server listening on port 3000');