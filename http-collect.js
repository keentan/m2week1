var http = require('http');

http.get(process.argv[2],function(response) {
	var answer = "";
	response.on("data",function(data) {
		answer += data.toString();
	});
	response.on("error", function(err) {

	})
	response.on("end", function(data) {
		console.log(answer.length);
		console.log(answer);
	})
})