// Student: Miguel Rodriguez Martinez
// VFW1405
// Project 1

// Screen Background
Ti.UI.setBackgroundColor("#000");

// Array Declare
var sports = ["1.Baseball","2.Basketball","3.Golf","4.Soccer","5.Tennis"];
var sportsIndex = 0;

var mainScreen = Ti.UI.createWindow({
	backgroundColor : "blue"
});

// This is the View to display the Sport
var labelView = Ti.UI.createView({
    backgroundColor : "black",
    height : 360,
    left : 20,
    right : 20,
    top : 80,
    zindex : 0
	
});

// This is the view for the Previous Button
var previousView = Ti.UI.createView({
	backgroundColor : "#fff",
	borderRadius : 3,
	top : labelView.top + labelView.height + 60,
	botton :20,
	left : 20,
	right : 200,
	widht : 20,
	height : 35,
	zindex : 1
	
});

// View for Next Button
var nextView = Ti.UI.createView({
	backgroundColor : "#fff",
	borderRadius : 3,
	top : labelView.top + labelView.height + 60,
	botton :20,
	left : 200,
	right : 20,
	widht : 20,
	height : 35,
	zindex : 2
	
});

// Label to show the actual sport
var sportLabel = Ti.UI.createLabel({
	color : "#fff",
	text : sports[0],
	font: {fontSize: 20, fontFamily: "Helvetica"}	
});

// label for previous button
var previousLabel = Ti.UI.createLabel({
	text : "Previous"
});

// label for Next Button
var nextLabel = Ti.UI.createLabel({
	text : "Next"
});



var loadFile = require("events");


// Core Code
labelView.add(sportLabel);
previousView.add(previousLabel);
nextView.add(nextLabel);
mainScreen.add(labelView, previousView, nextView);
mainScreen.open();

