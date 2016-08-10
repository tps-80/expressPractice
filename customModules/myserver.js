var http = require("http");
var randomInteger = require("./randomInteger");

function requestHandler(request, response) {
	if (request.url === "/") {
		response.end("This is the homepage!");
	} else if (request.url === "/bob") {
		response.end("This is bob's page");
	} else if (request.url === "/random") {
		response.end("This is a random int from Node:" + randomInteger());
	} else {
		response.end("That page doesn't exist")
	}
}

var server = http.createServer(requestHandler);

server.listen(3000);