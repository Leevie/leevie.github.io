var questArr = [
    "This is the first question: ", "This is the second question: "
]
let questionIndex = 0;
let questionCounter = 0;

var iterateQuestion = function() {    
        if(questionIndex >= questArr.length){
           alert("All Done!"); // End Game Stuff
        } else{
        var someObj = questArray[questionIndex];
        questionIndex++;
        questionCounter++;
        // gameScore();
        askQuestions(someObj);
        
        }
    };

$("#start").on("click", iterateQuestion);


const gameScore = function(){  //displays score and timer
    $("#scoreDiv").html("Time Left:  " + timeCounter + "<br>" + "Question Number: " + questionCounter + "<br>" + "Score:  " + scoreCounter);
};

const askQuestions = function(someObj) {

    // timeClock = setInterval(function() {
    //     timeCounter--
    //     gameScore();
    //     if (timeCounter === 0){
    //         checkIf();
    //     }
    // }, 1000)

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
