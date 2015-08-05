var orientation = "",
		isTouchDevice;


// Called once the document has fully loaded
$(document).ready(function() { 	
	detectOrientation();
	applyBackstretchImg();

	isTouchDevice = detectTouchDevice();
});


// Called when the browser window resizes
$(window).resize(function() {
	detectOrientation();
	applyBackstretchImg();
});


// apply different image depending on screen width
var applyBackstretchImg = function() {
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
var detectOrientation = function() {
	var mql = window.matchMedia("(orientation: portrait)");

	if(mql.matches) {
		orientation = "portrait"
	} else {
		orientation = "landscape"
	}

	// Add a media query change listener
	mql.addListener(function(m) {
		if(m.matches) {
			orientation = "portrait"
		}
		else {
			orientation = "landscape"
		}
	});
}


// Determins if touch features are available. Return true/false
var detectTouchDevice = function() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window; 
}
