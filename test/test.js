const chai = require('chai');
const expect = chai.expect;
const tcp = require(__dirname + '/../server.js');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('testing server', () => {
  after(() => {
    tcp.server.close();
  });
  it('should have a response from the server', (done) => {
    chai.request('http://localhost:8000')
      .get('/')
      .then((res) => {
        expect(res).to.have.status(200);
        done();
      })
      .catch((err) => {
        throw err;
      });
  });
});
