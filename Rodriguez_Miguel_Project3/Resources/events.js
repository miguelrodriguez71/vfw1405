// Events.js  File to contain Events for the Picture Gallery



var buildGallery = function() {
	// Collecting System Data
	var platWidth = Ti.Platform.displayCaps.platformWidth;
	var platHeight = Ti.Platform.displayCaps.platformHeight;

	var targetFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
	var pictureArray = targetFolder.getDirectoryListing();
	var totalImages = pictureArray.length;
	var imagesPerRow = 4;
	
	var imageWidth = (platWidth - 50) / 4;
	var imageHeight = imageWidth;	

	//Function to display Picture when click is pressed
	var getPicture = function(informa) {
		var getPicWindow = Ti.UI.createWindow({
			title: informa.image,
			backgroundColor: "#1f1789"
		});
		
		// Create a View to show the Picture
		var getPicView = Ti.UI.createImageView({
			image: informa.image,
			borderRadius:2,
			left:10,
			right: 10
		});
		
		getPicWindow.add(getPicView);
		navWindow.openWindow(getPicWindow);
	};

	// Gallery Main Window
	var winGallery = Ti.UI.createWindow({
		title: "Countries Gallery",

		backgroundColor: "#1f1789",
		top: 10,
		left: 10,
		right: 10
	});
	
	// Gallery Picture View
	var picContainer = Ti.UI.createScrollView({
		backgroundColor: "fff",
		top: 5,
		bottom: 10,
		borderRadius: 2,
		layout: "horizontal",
		
		width: platWidth -20,
		height: platHeight - winGallery.top - 150,
		
		contentWidth: platWidth - 20,
		showVerticalScrollIndicator: true,

	});	
	

	// Close Button	
	var closeButton = Ti.UI.createView({
		backgroundColor: "#408ede",
		top: picContainer.top + picContainer.height + 10,
		bottom:10,
		borderRadius: 3,
		heigth: 20
	});
	
	var closeLabel = Ti.UI.createLabel({
		text: "Close",
		borderRadius: 2,
		color: "#fff",
		textAlign: "center"
	});
	
	// Navigation Window
	var navWindow = Ti.UI.iOS.createNavigationWindow({
		window: winGallery
	});	
	
	// Loop to Create Gallery Image View for each Picture
		for(var i = 0; i < totalImages;  i++) {
			var myPicture = Ti.UI.createImageView({
				image: "images/"+ pictureArray[i],
				width: imageWidth-5,
				height: imageHeight,
				borderRadius: 2,
				top: 10,
				left: 10
				
			});
			
			picContainer.add(myPicture);		
		};
	
	
	closeButton.add(closeLabel);

	picContainer.addEventListener("click",function(event){
		getPicture(event.source);
	});

	closeButton.addEventListener("click",function(){
		navWindow.close();
	});
	
    winGallery.add(closeButton);
    
	winGallery.add(picContainer);

	navWindow.open();
};

mainButton.addEventListener("click", buildGallery);


