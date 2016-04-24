const expect = require('chai').expect;
const writeLogTest = require(__dirname + '/..lib/writeLogTest');

describe('test writeLog file', () => {
  it('writeLog should be a working function', () => {
    expect(typeof writeLog).to.eql('function');
  });
});
