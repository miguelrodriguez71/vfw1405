var aboutMe = {
	"personalInfo":{
		"name": "MIGUEL RODRIGUEZ MARTINEZ",
		"pic": "miguel.jpg",
		"pic2": "miguel2.jpg",
		"Height": "6 Feet",
		"Weight": "245 pounds",
		"timeZone": "Eastern",
		"whyMDP": "I love programming. Someday, I would like to be called as one of the biggest Mobile Devices Programmer",
		"levelJavascript": "Beginner",
		"levelTitanium": "Very Confortable",
		"favoriteMovie": "Forrest Gump",
		"favoriteSports": "Soccer, Basketball, Baseball, Football",
		"biography": "I was born in Venezuela, I have a 4 years degree as IT Programmer, love sports, happy married with Ninoska, with three kid: Fabiola, Adrian and JD",
		"chatInfo": [
			{
				"hostName": "AIM.COM",
				"userId": "miguelrodriguez@fullsail.edu"
			}
		]

	}
};



// Function to be called when select to see my personal info
var personalInfo = function() {
	var personaWindow = Ti.UI.createWindow({
		title: "Personal Information",

		backgroundColor: "#1f1789",
	});

	var pictureMe2 = Ti.UI.createImageView({
		top: 30,
		borderRadius: 3,
		Height: 100,
		width: 100,
		left: 10,
		image:"images/"+aboutMe.personalInfo.pic
	});
	
	var nameLabel = Ti.UI.createLabel({
		text: aboutMe.personalInfo.name,
		borderRadius: 2,
		color: "#fff",
		font: {fontSize: 11, fontFamily: "Helvetica"},
		top: 40,
		left: 120,
		height: 20	
	});

	var heightLabel = Ti.UI.createLabel({
		text: aboutMe.personalInfo.Height,
		borderRadius: 2,
		color: "#fff",
		font: {fontSize: 11, fontFamily: "Helvetica"},
		top: 60,
		left: 120,
		height:20	
	});
	
	var weightLabel = Ti.UI.createLabel({
		text: aboutMe.personalInfo.Weight,
		borderRadius: 2,
		color: "#fff",
		font: {fontSize: 11, fontFamily: "Helvetica"},
		top: 80,
		left: 120	
	});
	
	// Create a Table
	var stuff = Ti.UI.createTableView({
		color: "#fff",
		backgroundColor: "#408ede",
		top: 150,
		height:200 
	
	});
	
	if(Ti.Platform.name === "iPhone"){
		stuff.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	}
	
	
	// Create all sections
	var favSection = Ti.UI.createTableViewSection({
	    headerTitle: "Personal Info"
	});
	
	var favRow = Ti.UI.createTableViewRow({
			title: "Favorite Passtime",
			info: aboutMe.personalInfo.favoriteMovie,
			info2: aboutMe.personalInfo.favoriteSports,
			hasChild: true
	});
	favSection.add(favRow);	
	
	var bioRow = Ti.UI.createTableViewRow({
			title: "Biography",
			info: aboutMe.personalInfo.biography,
			info2: "",
			hasChild: true
	});
	favSection.add(bioRow);
		
	var sections1 = [favSection];

	stuff.addEventListener("click",function(events) {
		getInfo(events.source);
		
	});
	
	stuff.setData(sections1);


	
	// Close Button	
	var closeButton = Ti.UI.createView({
		backgroundColor: "#408ede",
		top: 400,
		bottom:10,
		borderRadius: 3,
		heigth: 20,
		width: 200
	});
	
	var closeLabel = Ti.UI.createLabel({
		text: "Close",
		borderRadius: 2,
		color: "#fff",
		textAlign: "center"
	});
	
	closeButton.add(closeLabel);
	
	// Navigation Window
	var navWindow = Ti.UI.iOS.createNavigationWindow({
		window: personaWindow
	});
	
	closeButton.addEventListener("click",function(){
		navWindow.close();
	});

	// Create Event Listener Function
	//
	//
	var getInfo = function(informa) {
		var infoWindow = Ti.UI.createWindow({
			title: informa.title,
			backgroundColor: "#fff"
		});
		
		// Create a Label to show the Info
		var infor1 = Ti.UI.createLabel({
			text: informa.info+informa.info2
		});
		
		//infoTitleView.add(infoMainTitle);
		infoWindow.add(infor1);
		navWindow.openWindow(infoWindow);
	};

	
    personaWindow.add(pictureMe2,nameLabel,heightLabel,weightLabel,stuff,closeButton);
	
	navWindow.open();
};

// Create Main View
mainContainer = Ti.UI.createView({
	borderRadius: 3,
	height:500,
	backgroundColor: "#408ede",
	
});

var nameText = Ti.UI.createLabel({
	top: 40,
	color : "#fff",
	text : "Miguel A. Rodriguez Martinez",
	font: {fontSize: 18, fontFamily: "Helvetica"}	
});

// Create a view for my Personal Info
	var pictureMe = Ti.UI.createImageView({
		top: 100,
		borderRadius: 3,
		Height: 200,
		width: 300,
		left: 10,
		image:"images/"+aboutMe.personalInfo.pic2
	});



// Button for Personal Info
mainButton = Ti.UI.createLabel({
	top: 400,
	borderRadius: 4,
	height: 60,
	width: 200,
	color: "#fff",
	backgroundColor: "RED",
	text: "View Personal Info",
	textAlign: "center"
});

mainButton.addEventListener("click", personalInfo);

mainContainer.add(nameText,pictureMe, mainButton);

mainScreen.add(mainContainer);
