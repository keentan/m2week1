var fs = require('fs');

fs.readFile(process.argv[2], (err,data) => {
	if (err) console.log(err)
	var sentences = data.toString().split("\n");
	console.log(sentences.length-1)
})