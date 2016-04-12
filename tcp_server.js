'use strict';

var net = require('net');
var fs = require('fs');
var HOST = '127.0.0.1';
var PORT = 3000;

net.createServer(function(socket) {

  console.log('CONNECTION: ' + socket.remoteAddress + ':' + socket.remotePort);

  socket.on('data', function(data);

    console.log('DATA ' + socket.remoteAddress + ': ' + data);
    socket.write('You said Burke ' + data);

  });

  socket.on('close', function(data) {
  console.log('Closed: ' + socket.remoteAddress + '' + sock.remotePort);

  });

}); .listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);
