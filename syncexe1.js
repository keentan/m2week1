var fs = require('fs');

console.log("Begin reading file")

var data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log("Finish reading file");

// add "Appended something" at the end of the file
console.log("Begin appending file");
fs.appendFileSync("input.txt","Appended something")
console.log("Finish appending file");


console.log("Begin re-reading file")

var newdata = fs.readFileSync("input.txt");
console.log(newdata.toString());
console.log("Finish re-reading file");
