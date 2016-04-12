'use strict';
var fs = require('fs');
var net = require('net');
var request = '';
var HOST = '127.0.0.1';
var PORT = 3000;

net.createServer(function(socket) {

  console.log('CONNECTION: ' + socket.remoteAddress + ':' + socket.remotePort);

  socket.on('data', function(data) {

    console.log('DATA ' + socket.remoteAddress + ': ' + data);
    socket.write('You said Burke ' + data + "");

  });

  socket.on('close', function(data) {
  console.log('Closed: ' + socket.remoteAddress + '' + socket.remotePort);
  fs.writeFile('sometext.txt', 'Mic Check Node.js', (err) => {
    if (err) throw err;
    console.log('saved');
  });
  });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);
