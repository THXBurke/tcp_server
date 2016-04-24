const expect = require('chai').expect;
const testServer = require(__dirname + '/../lib/server.js');
const fs = require('fs');
const net = require('net');

describe('server', () => {
  it('should create a server on localhost 3000', (done) => {
   expect(testServer.address().port).to.eql(3000);
   done();
  });

  it('should write to new file on GET request', (done) => {
    var directoryLength = fs.readdirSync(__dirname + '/../newData').length;
    var client = net.connect( { 'port': 3000 }, () => {} );
    client.emit('end');
    client.on('end', () => {
      fs.readdir(__dirname + '/../newData', (err, array) => {
        if (err) return console.log(err);
        expect(directoryLength + 1).to.eql(array.length);
        done();
      });
    });
  });
});
