var currentWindow = Ti.UI.currentWindow;

// JSON DATA

var worldCupTeams = {
	"argentina":{
		"country": "ARGENTINA",
		"playersList": [
			{
				"name": "Leo Messi",
				"description": "Team: FC Barcelona, Position: Forward. Born: 06-24-1987. Actually one of the best soccer players of the world.",
				"pic": "messi.jpg"
			},
			{
				"name": "Sergio Aguero",
				"description": "Team: Manchester City, Position: Forward. Born: 06-02-1988",
				"pic": "aguero.jpg"
			}
		]
	},
	"brasil":{
		"country": "BRASIL",
		"playersList": [
			{
				"name": "Neymar Jr.",
				"description": "Team: FC Barcelona, Position: Forward. Born: 05-02-1992.",
				"pic": "neymar.jpg"
			},
			{
				"name": "Marcelo",
				"description": "Team: Real Madrid CF, Position: Guard. Born: 05-12-1988.",
				"pic": "marcelo.jpg"
			}
		]
	},
};

// Create Event Listener Function
//
//

var getInfo = function(informa) {
	console.log(informa.pic);
	var infoWindow = Ti.UI.createWindow({
		title: informa.title,
		backgroundColor: "#fff"
	});
	
	var picturePlayer = Ti.UI.createImageView({
		top: 60,
		Height: 200,
		width: 300,
		left: 10,
		image:"players/"+informa.portrait
		
	});
	
	// Create a Label to show the Info about the player
	var infoplayer = Ti.UI.createLabel({
		top: 280,
		text: informa.info
	});
	
	//infoTitleView.add(infoMainTitle);
	infoWindow.add(picturePlayer,infoplayer);
	currentWindow.navigator.openWindow(infoWindow);
};

// Create a Table
var teams = Ti.UI.createTableView({
	//top: border.top + border.height
	
});

if(Ti.Platform.name === "iPhone"){
	teams.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}


// Create all sections
var argentinaSection = Ti.UI.createTableViewSection({
	headerTitle: worldCupTeams.argentina.country
});

var brasilSection = Ti.UI.createTableViewSection({
	headerTitle: worldCupTeams.brasil.country
});



// Create all Rows for each team
for(var i=0; i < worldCupTeams.argentina.playersList.length; i++) {
	var playerRow = Ti.UI.createTableViewRow({
		title: worldCupTeams.argentina.playersList[i].name,
		info: worldCupTeams.argentina.playersList[i].description,
		portrait: worldCupTeams.argentina.playersList[i].pic,
		hasChild: true
	});
	argentinaSection.add(playerRow);
}

for(var i=0; i < worldCupTeams.brasil.playersList.length; i++) {
	var playerRow = Ti.UI.createTableViewRow({
		title: worldCupTeams.brasil.playersList[i].name,
		info: worldCupTeams.brasil.playersList[i].description,
		portrait: worldCupTeams.brasil.playersList[i].pic,
		hasChild: true
	});
	brasilSection.add(playerRow);
}



var teamsSections = [argentinaSection,brasilSection];

teams.addEventListener("click",function(events) {
	getInfo(events.source);
	
});

teams.setData(teamsSections);


//titleView.add(mainTitle);
currentWindow.add(teams);