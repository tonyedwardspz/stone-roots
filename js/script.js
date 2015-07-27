var welcomeMessage = "Function called on ready";


// Called once the document has fully loaded
$(document).ready(function(){
	welcome(welcomeMessage);

	$.backstretch("images/stone-roots-home.jpg");
});


// Called when the browser window resizes
$(window).resize(function(){
	console.log('Resize')
});


// Storing functions in variables caches them in browser memory
var welcome = function(msg){
	console.log(msg);
}
