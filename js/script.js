// Called once the document has fully loaded
$(document).ready(function() {
	applyBackstretchImage();
});


// Called when the browser window resizes
$(window).resize(function() {
	applyBackstretchImage();
});


// apply different image depending on screen width
var applyBackstretchImage = function() {
	if (window.innerWidth < 480) {
		$.backstretch("images/stone-roots-mobile.jpg");
	}
	else if (window.innerWidth <= 768) {
		$.backstretch("images/stone-roots-tablet.jpg");
	}
	else {
		$.backstretch("images/stone-roots-home.jpg");
	}
}


// Use match media for orientation detection.
// Returns true if portait
var isPortrait = function() {
	return window.matchMedia("(orientation: portrait)").matches;
}


// Determins if touch features are available.
// Returns true/false
var isTouchDevice = function() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window; 
}
