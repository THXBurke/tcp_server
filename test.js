const expect = require('chai').expect;
const server = require(__dirname + '/../lib/tcp_server.js');
const request = require('superagent');
const fs = require('fs');

describe('tcp server testing', () => {
  it('test 1 ===1', () => {
    expect(1).to.eql(1);
  });
  it('server should not send a res to req', (done) => {
    request.get('localhost:3000').end(() => {
      expect(true).to.eql(false);
    });
    done();
  });
  it('server should load data to files', (done) => {
    fs.readdir(__dirname + '/../dat', (err, files) => {
      if (err) {
        return process.stderr.write(err);
      }
      var file = fs.readFileSync(__dirname + '/../dat/' + file)
        [files.length -1], 'utf8');
        done();
    });
  });
  after(() => {
    server.close();
  });
});
