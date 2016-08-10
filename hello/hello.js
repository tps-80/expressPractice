var express = require("express");

var app = express();

var url = require("url");
var parsedURL = url.parse("http://www.example.come/profile?name=barry");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

app.get("/", function(request, response) {
	response.send("Hello, Mr. Developer!");
});

app.listen(3000, function() {
	console.log("Express app started on port 3000.");
});
