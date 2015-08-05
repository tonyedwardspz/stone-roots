var welcomeMessage = "Function called on ready";


// Called once the document has fully loaded
$(document).ready(function(){ 	
		welcome(welcomeMessage);

		//determine backstretch image
		applyBackstretchImg();
});


// Called when the browser window resizes
$(window).resize(function(){
	console.log('Resize')
	applyBackstretchImg();
});


// Storing functions in variables caches them in browser memory
var welcome = function(msg){
	console.log(msg);
}

function applyBackstretchImg() {
		// apply different image depending on if phone/tablet/other
		if (window.innerWidth < 480) {
				$.backstretch("images/stone-roots-mobile.jpg");
		}
		else if ( window.innerWidth <= 768) {
				$.backstretch("images/stone-roots-tablet.jpg");
		}
		else if   ( window.innerWidth > 768) {
				$.backstretch("images/stone-roots-home.jpg");
		}
}
