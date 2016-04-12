const fs = require('fs');

const text = fs.createReadStream(__dirname + '/sometext.txt');

text.on('data', (chunk) => {
  chunk = chunk.toString().toUpperCase();
  process.stdout.write(chunk)
});
