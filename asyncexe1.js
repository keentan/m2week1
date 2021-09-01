var fs = require('fs');

console.log("Begin readig file");
// a callback, is the function that is declared as parameter
fs.readFile("input.txt", function(err,data){
	if (err) return console.log(err)
		console.log(data.toString());
		console.log("Finish reading file")
		console.log("Begin appending file")
		fs.appendFile("input.txt","Appending item", function(err) {
			console.log("Finish appending file")
			console.log("Begin re-reading file")
			fs.readFile("input.txt", function(err,data){
				if (err) return console.log(err);
				console.log(data.toString());
				console.log("Finish re-reading file");
			})
		})

})
