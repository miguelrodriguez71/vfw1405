// JSON DATA

var worldCupTeams = {
	"argentina":{
		"country": "ARGENTINA",
		"playersList": [
			{
				"name": "Leo Messi",
				"description": "Team: FC Barcelona, Position: Forward. Born: 06-24-1987. Actually one of the best soccer players of the world."
			},
			{
				"name": "Sergio Aguero",
				"description": "Team: Manchester City, Position: Forward. Born: 06-02-1988"
			}
		]
	},
	"brasil":{
		"country": "BRASIL",
		"playersList": [
			{
				"name": "Neymar Jr.",
				"description": "Team: FC Barcelona, Position: Forward. Born: 05-02-1992."
			},
			{
				"name": "Marcelo",
				"description": "Team: Real Madrid CF, Position: Guard. Born: 05-12-1988."
			}
		]
	},
	"usa":{
		"country": "UNITED STATES",
		"playersList": [
			{
				"name": "Landon Donovan",
				"description": "Team: LA Galaxy, Position: Forward. Born: 03-04-1982. This is his Fourth World Cup apparency."
			},
			{
				"name": "Clint Dempsey",
				"description": "Team: Seattle Sounders FC, Position: Forward. Born: 03-09-1983."
			}
		]
	}
};



// Create Event Listener Function
//
//
var getInfo = function(informa) {
	var infoWindow = Ti.UI.createWindow({
		title: informa.title,
		backgroundColor: "#fff"
	});
	
	// Create a Label to show the Info about the player
	var infoplayer = Ti.UI.createLabel({
		text: informa.info
	});
	
	//infoTitleView.add(infoMainTitle);
	infoWindow.add(infoplayer);
	navWindow.openWindow(infoWindow);
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

var usaSection = Ti.UI.createTableViewSection({
	headerTitle: worldCupTeams.usa.country
});


// Create all Rows for each team
for(var i=0; i < worldCupTeams.argentina.playersList.length; i++) {
	var playerRow = Ti.UI.createTableViewRow({
		title: worldCupTeams.argentina.playersList[i].name,
		info: worldCupTeams.argentina.playersList[i].description,
		hasChild: true
	});
	argentinaSection.add(playerRow);
//	playerRow.addEventListener("click",getinfo);
}

for(var i=0; i < worldCupTeams.brasil.playersList.length; i++) {
	var playerRow = Ti.UI.createTableViewRow({
		title: worldCupTeams.brasil.playersList[i].name,
		info: worldCupTeams.brasil.playersList[i].description,
		hasChild: true
	});
	brasilSection.add(playerRow);
//	playerRow.addEventListener("click",getinfo);
}

for(var i=0; i < worldCupTeams.usa.playersList.length; i++) {
	var playerRow = Ti.UI.createTableViewRow({
		title: worldCupTeams.usa.playersList[i].name,
		info: worldCupTeams.usa.playersList[i].description,
		hasChild: true
	});
	usaSection.add(playerRow);
//	playerRow.addEventListener("click",getinfo);
}


var teamsSections = [argentinaSection,brasilSection,usaSection];

teams.addEventListener("click",function(events) {
	getInfo(events.source);
	
});

teams.setData(teamsSections);


//titleView.add(mainTitle);
mainScreen.add(teams);