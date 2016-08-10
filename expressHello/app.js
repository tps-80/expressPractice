var express = require("express");
var logger = require("morgan");
var path = require("path");
var http = require("http");


var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));


// var publicPath = path.resolve(__dirname, "public");
// app.use(express.static(publicPath));

app.use(function(request, response, next) {
	console.log("In comes a request to: " + request.url);
	next();
});

app.get("/", function(request, response) {
	response.render("index", {
		message: "This is inside the message template"
	});
});

app.get("/hello/:who", function(request, response) {
	response.end("Yo, " + request.params.who + ".");
});

app.get("/redirect/new", function(request, response) {
	response.redirect("http://www.theonion.com");
});

app.get("/more", function(request, response) {
	response.end("All the pages starting with more?");
})

app.use(function(request, response, next) {
	response.writeHead(200, { "Content-type" : "text/plain" });
	response.end("Looks like you didn't finda a static file.");
	next();
});

app.use(function(request, response, next) {
	var minute = (new Date()).getMinutes();
	if ((minute % 2) === 0){
		next();
	} else {
		response.statusCode = 403;
		response.end("Not Authorized");
	}
});

app.use(function(request, response) {
	response.end('Secret Info: The Password is "Swordfish"!');
})

http.createServer(app).listen(3000);