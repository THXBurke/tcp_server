const net = require('net');
const writeLog = require(__dirname + '/writeLog');

const server = module.exports = net.createServer((socket) => {
  socket.pipe(writeLog());
});

server.listen(3000, () => {
  process.stdout.write('server happy on 3000\n');

});

server.close();
