var fs = require('fs');

var data = fs.readFileSync(process.argv[2]).toString();

var sentences = data.split("\n");
console.log(sentences.length-1)
