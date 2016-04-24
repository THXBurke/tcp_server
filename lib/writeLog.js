const fs = require('fs');

module.exports = exports = () => {
  const date = new Date();
  var time = date.getTime();
  return fs.createWriteStream(__dirname + '/../data.output' + time + '.txt');
};
