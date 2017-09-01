var http = require('http');
var events = require('events');

var server = http.createServer(function(request, response){
        console.log("request", request.method, request.headers);
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello, sally\n');
}).listen(8888);

console.log("server running at http://127.0.0.1:8888/");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected (){
    console.log("连接成功");
    eventEmitter.emit('data_received');
}

eventEmitter.on('connect', connectHandler);
eventEmitter.on('data_received', function(dd){
    console.log("数据接收", dd);
})

console.log("server", server);
