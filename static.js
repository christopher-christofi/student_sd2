const static = require("node-static");

const http = require("http");

var file = new(static.Server)(__dirname);

var hostname = "127.0.0.1";
var port = 3000;

const server = http.createServer(function(req, res) {
    file.serve(req, res);
});

server.listen(port, hostname, function() {
    console.log('Server running at http://${hostname}:${port}/');
});