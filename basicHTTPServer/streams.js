var fs = require('fs');

//need help with the right file to connect and how to
var text = fs.createReadStream(__dirname + './sometext.txt');

text.pipe(process.stdout);
