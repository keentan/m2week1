var fs = require('fs');

function finishReReadFile(err, data) {
	if (err) return err
		console.log(data.toString())
}
function reReadFile(err) {
console.log("Finish append file")
console.log("Begin re-reading file")
fs.readFile("input.txt", finishReReadFile)
}
function appendFile(err,data) {
	if (err) console.log(err)
		console.log(data.toString())
		console.log("Finish reading File")
		console.log("Begin appending file")
		fs.appendFile("input.txt","Data to append", reReadFile)
}
console.log("Begin Reading File")
fs.readFile("input.txt",appendFile)
