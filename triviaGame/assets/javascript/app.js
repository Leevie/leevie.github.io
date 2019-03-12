



// Variables

var clockRunning = false;
var questObjOne;
var ansLtrArray = ["A", "B", "C", "D"];
var questionIndex = 0;
var correctAns;
// var answerVar;

var timeClock;
var timeCounter = 15;
var scoreCounter = 0;
var questionCounter = 0;

// var myVar = setInterval(iterateQuestion, 3000);

// Game Start Function
var iterateQuestion = function() {    
    // Needs an "if clockRunning.. condition for setTimeout to initialize. ...maybe this goes in question-functions
    // Calls the question-functions
        
        if(questionIndex >= questArray.length){
           alert("All Done!"); // End Game Stuff
        } else{
        var someObj = questArray[questionIndex];
        questionIndex++;
        questionCounter++;
        gameScore();
        askQuestions(someObj);
        
        }
    };
 

    
// };

// Start Button
$("#start").on("click", iterateQuestion);

const gameScore = function(){  //displays score and timer
    // $("#timerDiv").html("Time Left:  " + timeCounter) // Timer Placeholder
    $("#scoreDiv").html("Time Left:  " + timeCounter + "<br>" + "Question Number: " + questionCounter + "<br>" + "Score:  " + scoreCounter);
};

const checkIf = function(guess){
    clearInterval(timeClock);
    timeCounter = 15;
    compareFunc(guess);
};
// Functions in an Array -- change to an Object?
const askQuestions = function(someObj) {

        timeClock = setInterval(function() {
            timeCounter--
            gameScore();
            if (timeCounter === 0){
                checkIf();
            }
        }, 1000)

        $("#qstDiv").empty();
        $("#ansDiv").empty();
        correctAns = someObj.correctAns();
        console.log("What is correctAns here: " + correctAns);


        $("#qstDiv").html(someObj.question);
        // $("#ansDiv").html(someObj.answers[0] + "<br>" + someObj.answers[1] + "<br>" + someObj.answers[2] + "<br>" + someObj.answers[3]); //This works
        // For Loop to assign values to questions
        someList = $("<ul>")
        someList.addClass("list-group");
        $("#ansDiv").append(someList);
        for(var j = 0; j < someObj.answers.length; j++) {
            ansText = $("<li>");
            ansText.addClass("list-group-item");
            ansText.attr("answer-value", someObj.answers[j]);
            $(".list-group").append(ansText);
            ansText.html(someObj.answers[j]);
        }


        console.log("correctAns is:  " + correctAns);

        
        $(".list-group-item").on("click", function() {
            console.log("WORKS!!");
            answerVar = $(this).attr("answer-value");
            console.log("This click returned:  " + answerVar);
            checkIf(answerVar);  //Works
        });
        
    };


    var compareFunc = function(a) {
        

        b = correctAns;  //need to figure out how to get correct answer here.
        if(a === b) {
            scoreCounter++;
            $("#ansDiv").html("<h2>The Force is strong with you..<h2>");
        } else {
            $("#ansDiv").html("You've failed me for the last time, Admiral...");
        }
        console.log(a === b);
    setTimeout(iterateQuestion, 2000);
    };

var questArray = [
       {
            question: "Which Star Wars movie &nbsp;<i>SHOULD</i>&nbsp; always be viewed first for a newcomer?",
            answers: [
                "Episode 1: The Phantom Menace",
                "Episode 6: Return of the Jedi",
                "Episode 4: A New Hope",
                "Episode 7: The Force Awakens"
            ],
            correctAns: function() {return this.answers[2]}              
        },
        {
            question: "What is the color of Mace Windu's Lightsaber?",
            answers: [
                "Green",
                "Purple",
                "Blue",
                "Crimson"
            ],
            correctAns: function() {return this.answers[1]}              
        },
        {
            question: "Who says the following quote:" + "<br>" + "'Do or do not, there is no try.'",
            answers: [
                "Master Yoda",
                "Obi Wan Kenobi",
                "Han Solo",
                "Chewbacca"
            ],
            correctAns: function() {return this.answers[2]}              
        },

        questObjFour = {
            question: "What is the Empire's 'Secret Weapon' called?",
            answers: [
                "AT-AT Walker",
                "Star Destroyer",
                "The Millenium Falcon",
                "The Death Star"
            ],
            correctAns: function() {return this.answers[3]}              
        },
        questObjFive = {
            question: "Who is the Evil Emperor?",
            answers: [
                "Darth Vader",
                "Count Dooku",
                "Darth Sidious",
                "General Grievous"
            ],
            correctAns: function() {return this.answers[2]}              
        },
        questObjSix = {
            question: "What cold, snowy planet was home to a famous rebel base?",
            answers: [
                "Hoth",
                "Tatooine",
                "Coruscant",
                "Yavin 4"
            ],
            correctAns: function() {return this.answers[0]}              
        },
        questObjSeven = {
            question: "What color is Darth Vader's Lightsaber?",
            answers: [
                "Orange",
                "Green",
                "Gold",
                "Red"
            ],
            correctAns: function() {return this.answers[3]}              
        },
        questObjEight = {
            question: "What is the name of Darth Vader's grandson?",
            answers: [
                "Luke Skywalker",
                "Kylo Ren",
                "Han Solo",
                "Obi Wan Kenobi"
            ],
            correctAns: function() {return this.answers[1]}              
        },
        questObjNine = {
            question: "Who is Luke Skywalker's twin sister?",
            answers: [
                "Jyn Erso",
                "Rey",
                "General Leia Organa",
                "Rose"
            ],
            correctAns: function() {return this.answers[2]}              
        },
        questObjTen = {
            question: "What ship is famous for it's 'Kessel Run' in under 12 parsecs? ",
            answers: [
                "Tie Fighter Advanced",
                "The Millenium Falcon",
                "The X-Wing Fighter",
                "The Star Destroyer"
            ],
            correctAns: function() {return this.answers[1]}              
        },


    ]
    



// Console Logs
console.log(questArray.length);
//  ONLY Available inside their functions  *Declared it outside, now it's visible and works.
    // console.log(questObjOne.answers[2]);
    // console.log(questObjOne.correctAns());
    // console.log(questObjOne.answers[2] === questObjOne.correctAns());