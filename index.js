import { WebSocketServer } from 'ws';
var body = ""
const wss = new WebSocketServer({ port: 80 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
    body = String(data);
    wss.clients.forEach(function each(client) {
      client.send(String(data));
      console.log("sent: "+String(data))
    });
  });

  ws.send(body);
});
