const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {
  socket.pipe(process.stdout);
  const text = fs.createWriteStream(__dirname + '/logs/log_' + Date.now() + '.txt');
  socket.pipe(text);
  socket.write('HTTP/1.1 200 OK');
  socket.on('timeout', () => {
    socket.end();
  });
  socket.setTimeout(100);
  socket.pipe(socket);
});

server.listen(8000, () => {
  process.stdout.write('Server happy on 8000');
});

exports.server = server;
