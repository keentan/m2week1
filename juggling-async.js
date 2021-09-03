var http = require('http');

var myArray = ['','',''];

function verifyComplete() {
	if (myArray.indexOf('') == -1) {
		for (var i=0; i < 3; i++) {
			console.log(myArray[i]);
		}
	}
}

http.get(process.argv[2],function(response) {
	var answer = "";
	response.on("data",function(data) {
		answer += data.toString();
	});
	response.on("error", function(err) {

	})
	response.on("end", function(data) {
		myArray[0] = answer;
		verifyComplete();
	})
})
http.get(process.argv[3],function(response) {
	var answer = "";
	response.on("data",function(data) {
		answer += data.toString();
	});
	response.on("error", function(err) {

	})
	response.on("end", function(data) {

		myArray[1] = answer;
		verifyComplete();
	})
})
http.get(process.argv[4],function(response) {
	var answer = "";
	response.on("data",function(data) {
		answer += data.toString();
	});
	response.on("error", function(err) {

	})
	response.on("end", function(data) {

		myArray[2] = answer;
		verifyComplete();
	})
})