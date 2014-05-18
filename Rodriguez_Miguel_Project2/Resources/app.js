// Rodriguez Miguel
// Visual Framework
// VFW1405
// Project 2



Titanium.UI.setBackgroundColor('#000');

// Create Main screen
var mainScreen = Ti.UI.createWindow({
	title: "World Cup 2014 Teams",
	backgroundColor: "#fff"
	
});

// Create a Navigation Window
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainScreen
});

// Loading Data and Building Table
var loadfile = require("TableAndEvents");

// Main Window Open
navWindow.open();

