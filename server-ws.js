var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8181});
wss.on('connection', function(ws){
    console.log("client connected");
    ws.on('message', function(message){
        console.log(message);
        sendStockUpdates(ws);
    });
    var sendStockUpdates = function (ws) {
        // if (ws.readyState == 1) {
            var stocksObj = {
                jk: '10',
                zg: '11',
                cjl: '12',
                hsl: '13',
                zd: '14',
                cje: '15'
            }
            ws.send(JSON.stringify(stocksObj));
        // }
    }
});
