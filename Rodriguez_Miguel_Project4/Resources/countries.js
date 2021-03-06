var currentWindow = Ti.UI.currentWindow;

var platWidth = Ti.Platform.displayCaps.platformWidth;
var platHeight = Ti.Platform.displayCaps.platformHeight;

var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageArray = imageFolder.getDirectoryListing();
var totalImages = imageArray.length;
var imageWidth = (platWidth - 50) / 4;
var imageHeight = imageWidth;
var x = 0;	

var countryLabel = Ti.UI.createLabel({
	top:70,
	color: "black",
	text: imageArray[x]
});

var picView = Ti.UI.createImageView({
	image: "images/"+imageArray[x],
	borderRadius:2,
	height: 300,
	left:10,
	right: 10
});

var nextButton = Ti.UI.createLabel({
	backgroundColor: "#942c64",
	color: "#fff",
	text: "Next Picture",
	textAlign: "center",
	top: platHeight-150,
	height: 90,
	width: platWidth,
	borderRadius: 2
});

nextButton.addEventListener("click",function(event) {
	x++;
	if(x === totalImages) {
		x = 0;
	};
	picView.image = "images/"+imageArray[x];
	countryLabel.text = imageArray[x];
});

currentWindow.add(countryLabel,picView,nextButton);
