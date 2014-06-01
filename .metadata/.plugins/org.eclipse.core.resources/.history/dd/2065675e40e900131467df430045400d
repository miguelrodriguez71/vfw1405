// Rodriguez Miguel
// Project 4
// Visual Framework 1405

// Platform variables and general arrays
var platWidth = Ti.Platform.displayCaps.platformWidth;
var platHeight = Ti.Platform.displayCaps.platformHeight;
var buttons = ["Countries","Famous Players","Otro Custom"];
var colorsBG  = ["yellow","green","white"];
var fileToRun = ["countries.js","players.js","custom.js"];



//Main Window
var mainWindow = Ti.UI.createWindow({
	title: "World Cup Brasil 2014",
	color: "black",
	backgroundColor: "#ebf2f4"
});

for (var i = 0; i < 3;  i++) {

        var buttonLabel = Ti.UI.createLabel({
			color: "black",
			top: (i+1)*80,
			height: 80,
			width: platWidth,
			backgroundColor: colorsBG[i],
			text: buttons[i],
			file: fileToRun[i],
			textAlign: "center"
		});
		mainWindow.add(buttonLabel);
};

// Load Option Function
var loadOption = function(inform) {
	var newWindow = Ti.UI.createWindow({
		backgroundColor: "#f7e1ed",
		title: inform.text,
		url: inform.file,
		navigator: navWindow
	});

	navWindow.openWindow(newWindow);
};

// Event Listener 

mainWindow.addEventListener("click",function(event){
		loadOption(event.source);
});

	
// Navigation Window

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});	

navWindow.open();

