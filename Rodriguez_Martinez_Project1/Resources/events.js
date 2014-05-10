// Click Previous Event
var previousTitle = function() {
	if (sportsIndex === 0) {
		sportsIndex = 4;
	} else {
		sportsIndex = sportsIndex - 1;	
	};
	sportLabel.text = sports[sportsIndex];
};


// Click Next Event
var nextTitle = function() {
	if (sportsIndex === 4) {
		sportsIndex = 0;
	} else {
		sportsIndex = sportsIndex + 1;		
	};
	sportLabel.text = sports[sportsIndex];
};

// Call Events for button
previousView.addEventListener("click",previousTitle);
nextView.addEventListener("click",nextTitle);
