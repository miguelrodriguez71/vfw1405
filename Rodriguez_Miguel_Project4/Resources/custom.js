var currentWindow = Ti.UI.currentWindow;
var platWidth = Ti.Platform.displayCaps.platformWidth;
var platHeight = Ti.Platform.displayCaps.platformHeight;
var totalRight = 0;
var counter = 1;
var questions = ["Who did wins World Cup Spain 1982?",
				"What is Pele's First Name?",
				"Mexico's Shirt Color?",
				"What City will host world cup final this year?",
				"How many players by each team?"];
var answers = ["Italy","Edson","Green","Rio de Janeiro","11"];


var pb=Titanium.UI.createProgressBar({
	backgrundColor: "black",
	color: "#fff",
    top:40,
    width:250,
    height:'auto',
    min:0,
    max:5,
    value:1,
    message: 'Question 1 of 5',
    font:{fontSize:14, fontWeight:'bold'},
    style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN
});

var nextButton = Ti.UI.createLabel({
	top: platHeight-200,
	backgroundColor: "#3f2cf1",
	color: "#fff",
    height: "100",
	width: "100",
	text: "Play Now",
	textAlign: "center"

});

var question = Ti.UI.createLabel({
	height: "auto",
	width: "auto",
	backgroundColor: "#f7e1ed",
	top:100,
	text: questions[counter-1]
});
		
var answer = Ti.UI.createTextField({
	backgroundColor: "#fff",
	top: 150,
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
	width : 300,
	height : 35,
	clearOnEdit: true
});	

var getQuestion = function() {
	question.text = questions[counter-1];
	answer.clearOnedit = true;
	counter++;
};


nextButton.addEventListener("click",function(event) {

	if (counter === 1) {
		nextButton.text = "Next Question";
		currentWindow.add(question,answer);
	};

	if (counter === 5) {
		nextButton.text = "Get Score";
	};
	if (counter === 6) {
		question.Text = "You have " + totalRight + " of 5 questions";
		counter = 1;
		totalRight = 0;
		nextButton.text = "Play Now";
		return;
	};

	pb.value = counter;
	pb.message = "Question " + counter + " de 5";	
		getQuestion();
});
	

currentWindow.add(pb,nextButton);
pb.show();
