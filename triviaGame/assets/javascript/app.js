



// Variables

var clockRunning = false;
var questObjOne;
var ansLtrArray = ["A", "B", "C", "D"];

// Game Start Function
var startGame = function() {    
    // Needs an "if clockRunning.. condition for setTimeout to initialize. ...maybe this goes in question-functions
    // Calls the question-functions
    // for(var i = 0; i < questArray.length; i++) {
    for(var i = 0; i < 1; i++) {
        someObj = questArray[i];
        askQuestions(someObj);
    };
 
};

// Start Button
$("#start").on("click", startGame);

var compareFunc = function(a) {
    b = someObj.correctAns();
    if(a === b) {
        $("#ansDiv").html("YES!!");
    } else {
        $("#ansDiv").html("NOPE!!");
    }

};

// Functions in an Array -- change to an Object?
var askQuestions = function(someObj) {
       
        $("#qstDiv").html(someObj.question);
        // $("#ansDiv").html(someObj.answers[0] + "<br>" + someObj.answers[1] + "<br>" + someObj.answers[2] + "<br>" + someObj.answers[3]); //This works
        // For Loop to assign values to questions
        for(var j = 0; j < someObj.answers.length; j++) {
            ansText = $("<p>");
            ansText.addClass("answer-text");
            ansText.attr("answer-value", ansLtrArray[j]);
            $("#ansDiv").html(ansText);
            $("#ansDiv").append(someObj.answers[j] + "<br>");
            // console.log("ansText is: " + ansText + someObj.answers[j] + ansLtrArray[j]);
            compareFunc("C");
        }
        
    };



var questArray = [
    // questionOneFunc = function() 
        questObjOne = {
            question: "Which Star Wars movie &nbsp;<i>SHOULD</i>&nbsp; always be viewed first for a newcomer?",
            answers: [
                "Episode 1: The Phantom Menace",
                "Episode 6: Return of the Jedi",
                "Episode 4: A New Hope",
                "Episode 7: The Force Awakens"
            ],
            correctAns: function() {return this.answers[2]}              
        },
        questObjTwo = {
            question: "What is the color of Mace Windu's Lightsaber?",
            answers: [
                "Green",
                "Purple",
                "Blue",
                "Crimson"
            ],
            correctAns: function() {return this.answers[1]}              
        },
        questObjThree = {
            question: "Who says the following quote:" + "<br>" + "'Do or do not, there is no try.'",
            answers: [
                "Master Yoda",
                "Obi Wan Kenobi",
                "Han Solo",
                "Chewbacca"
            ],
            correctAns: function() {return this.answers[2]}              
        },

        // questObjFour = {
        //     question: "What is the Empire's 'Secret Weapon' called?",
        //     answers: [
        //         "AT-AT Walker",
        //         "Star Destroyer",
        //         "The Millenium Falcon",
        //         "The Death Star"
        //     ],
        //     correctAns: function() {return this.answers[3]}              
        // },
        // questObjFive = {
        //     question: "Who is the Evil Emperor?",
        //     answers: [
        //         "Darth Vader",
        //         "Count Dooku",
        //         "Darth Sidious",
        //         "General Grievous"
        //     ],
        //     correctAns: function() {return this.answers[2]}              
        // },
        // questObjSix = {
        //     question: "What cold, snowy planet was home to a famous rebel base?",
        //     answers: [
        //         "Hoth",
        //         "Tatooine",
        //         "Coruscant",
        //         "Yavin 4"
        //     ],
        //     correctAns: function() {return this.answers[0]}              
        // },
        // questObjSeven = {
        //     question: "What color is Darth Vader's Lightsaber?",
        //     answers: [
        //         "Orange",
        //         "Green",
        //         "Gold",
        //         "Red"
        //     ],
        //     correctAns: function() {return this.answers[3]}              
        // },
        // questObjEight = {
        //     question: "What is the name of Darth Vader's grandson?",
        //     answers: [
        //         "Luke Skywalker",
        //         "Kylo Ren",
        //         "Han Solo",
        //         "Obi Wan Kenobi"
        //     ],
        //     correctAns: function() {return this.answers[1]}              
        // },
        // questObjNine = {
        //     question: "Who is Luke Skywalker's twin sister?",
        //     answers: [
        //         "Jyn Erso",
        //         "Rey",
        //         "General Leia Organa",
        //         "Rose"
        //     ],
        //     correctAns: function() {return this.answers[2]}              
        // },
        // questObjTen = {
        //     question: "What ship is famous for it's 'Kessel Run' in under 12 parsecs? ",
        //     answers: [
        //         "Tie Fighter Advanced",
        //         "The Millenium Falcon",
        //         "The X-Wing Fighter",
        //         "The Star Destroyer"
        //     ],
        //     correctAns: function() {return this.answers[1]}              
        // },


    ]
    
    //Need to get the result of their guess here:


    // Function to compare result to correctAns

    
//     questionTwoFunc = function() {
        
//     },
    
//     questionThreeFunc = function() {
        
//     }
// ];

// var questObjOne = {
//     question: "Which Star Wars movie <i> SHOULD </i> always be viewed first for a newcomer?",
//     answer1: "Episode 1: The Phantom Menace",
//     answer2: "Episode 6: Return of the Jedi",
//     answer3: "Episode 4: A New Hope",
//     answer4: "Episode 7: The Force Awakens",
//     correctAns: function() {return this.answer3}

// }

// var someFunc = function(a,b) {
//     if(a === b) {
//         $("#ansDiv").html("YES!!");
//     }
// }


// Console Logs
console.log(questArray.length);
//  ONLY Available inside their functions  *Declared it outside, now it's visible and works.
    console.log(questObjOne.answers[2]);
    console.log(questObjOne.correctAns());
    console.log(questObjOne.answers[2] === questObjOne.correctAns());