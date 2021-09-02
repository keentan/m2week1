var fs = require('fs');

fs.readdir(process.argv[2], function(err,files) {
	if (err) console.log(err)
	// console.log(files);
var ext = "."+process.argv[3]
for (var i=0; i < files.length; i++) {
	if (files[i].endsWith(ext))
		console.log(files[i]);
}
})