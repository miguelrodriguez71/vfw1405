// Rodriguez Miguel
// Project 3
// Visual Framework 1405


mainWindow = Ti.UI.createWindow({
	title: "Countries Gallery",
	color: "fff",
	backgroundColor: "#1f1789"
});

mainContainer = Ti.UI.createView({
	borderRadius: 3,
	width: 240,
	height: 60,
	backgroundColor: "#408ede",
	
});


mainButton = Ti.UI.createLabel({
	color: "#fff",
	text: "Open Gallery",
	textAlign: "center"
});

var loadFile = require("Events");


mainContainer.add(mainButton);

mainWindow.add(mainContainer);

mainWindow.open();
