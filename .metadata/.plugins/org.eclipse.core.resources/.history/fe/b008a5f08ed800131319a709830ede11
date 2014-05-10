Ti.UI.setBackgroundColor("#000");

var sports = ["Baseball","Basketball","Golf","Soccer","Tennis"];
var sportsIndex = 0;

var mainScreen = Ti.UI.createWindow({
	backgroundColor : "blue"
});

var labelView = Ti.UI.createView({
    backgroundColor : "black",
    height : 360,
    left : 20,
    right : 20,
    top : 80,
    zindex : 0
	
});

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

var sportLabel = Ti.UI.createLabel({
	color : "#fff",
	text : sports[0],
	font: {fontSize: 20, fontFamily: "Helvetica"}	
});

var previousLabel = Ti.UI.createLabel({
	text : "Previous"
});

var nextLabel = Ti.UI.createLabel({
	text : "Next"
});

var previousTitle = function() {
	if (sportsIndex === 0) {
		sportsIndex = 4;
	} else {
		sportsIndex = sportsIndex - 1;	
	};
	sportLabel.text = sports[sportsIndex];
};

var nextTitle = function() {
	if (sportsIndex === 4) {
		sportsIndex = 0;
	} else {
		sportsIndex = sportsIndex + 1;		
	};
	sportLabel.text = sports[sportsIndex];
};

previousView.addEventListener("click",previousTitle);
nextView.addEventListener("click",nextTitle);

labelView.add(sportLabel);
previousView.add(previousLabel);
nextView.add(nextLabel);
mainScreen.add(labelView, previousView, nextView);
mainScreen.open();

