var Mustache = require("mustache");
var result = Mustache.render("Hi, {{first}} {{last}}!", {
	first: "Carl",
	last: "Sagan"
});

console.log(result);