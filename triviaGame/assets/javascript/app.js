

// Start Button
$("#start").on("click", startGame);


// Variables

var clockRunning = false;

// Game Start Function
var startGame = function() {    
    // Needs an "if clockRunning.. condition for setTimeout to initialize. ...maybe this goes in question-functions
    // Calls the question-functions
    for(var i = 0; i < questArray.length; i++) {
        questArray[i];

        
    }


};

// Functions in an Array -- change to an Object?

var questArray = [
    questionOneFunc = function() {
        var questObjOne = {
            question: "Which Star Wars movie <i> SHOULD </i> always be viewed first for a newcomer?",
            answer1: "Episode 1: The Phantom Menace",
            answer2: "Episode 6: Return of the Jedi",
            answer3: "Episode 4: A New Hope",
            answer4: "Episode 7: The Force Awakens",
            correctAns: function() {return this.answer3}        
        };

        // Function to compare result to correctAns
        compareFunc = function(a) {
            b = this.correctAns();
            if(a === b) {
                $("#ansDiv").html("YES!!");
            } else {
                $("#ansDiv").html("NOPE!!");
            }
        compareFunc(result);
    },
    
    questionTwoFunc = function() {
        
    },
    
    questionThreeFunc = function() {
        
    }
]

var questObjOne = {
    question: "Which Star Wars movie <i> SHOULD </i> always be viewed first for a newcomer?",
    answer1: "Episode 1: The Phantom Menace",
    answer2: "Episode 6: Return of the Jedi",
    answer3: "Episode 4: A New Hope",
    answer4: "Episode 7: The Force Awakens",
    correctAns: function() {return this.answer3}

}

var someFunc = function(a,b) {
    if(a === b) {
        $("#ansDiv").html("YES!!");
    }
}


// Console Logs
console.log(questArray.length);
console.log(questObjOne.answer3);
console.log(questObjOne.correctAns());
console.log(questObjOne.answer3 === questObjOne.correctAns());