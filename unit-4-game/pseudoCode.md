#   Pseudo Code for Unit-4 Game
##  Crystal Collectors Game

### Page Style
Style page similar to example

* Background image

* Title Block
    * Fixed text, class = 'titleDiv'
    * Fixed height/width 'div', floated left 

* Instruction Block
    * Fixed text, class = 'insructDiv'
    * Fixed height/width 'div', floated left

* Game Blocks
    * Target Number Box, floated left
        * Dynamic 'text', class = 'targetNumDiv'
        * Current Number tries to match this number
        * Changes once game is over, random number updates this div 

    * Score W/L Box, floated left
        * Dynamic 'text', class = 'scoreDiv'
        * Updated as player either matches Target Number (win) or is over Target (loss), If statement

    * Gem Block
        * Images get written here, class = 'gemDiv'
        * Contains 4 'crytal/gem' images of the same dimensions (same class?)
        * Each image randomly assigned a different number for the "round", changes when "round" is over (reset function?)
        * Images (or class) will have jQuery 'click' functions that update 'inputNumDiv's contents

    * Text with "Your total score is:" box

    * Gem Number Box, floated left
        * Dynamic 'text', class = 'inputNumDiv'
        * Updated when player clicks a gem, jQuery 'click' function appends/adds-to this div

### Game Code/Functionality
* Initial
    * Random number updates 'targetNumDiv'.  This number doesn't change until game is over.
    * Player Score ('scoreDiv') is initially set to 0 for Wins, 0 for Losses.
    * Images assigned a random number (each from an array?  same array to ensure randomness?).
    * Gem Number box ('inputNumDiv') set to 0

* Play
    * When player clicks on a gem, that number (contents) are written to Gem Box ('inputNumDiv') and Gem Box is compared to Target Number ('targetNumDiv').  
    * If 'inputNumDiv' not greater than that number, play continues.  If more, play stops, Losses is ++.  If equal, play stops, Wins is ++
    * If play is continued, player may choose another gem.  Next click adds to 'inputNumDiv'.  If 'inputNumDiv' not greater than that number, play continues.  If more, play stops, Losses is ++.  If equal, play stops, Wins is ++
    * If play is stopped, 'inputNumDiv' is set to 0, 'targetNumDiv' is updated with another random number.


### Functions


### If/Else/While Statements
- While ('targetNum' !=== 'inputNum'), don't change (may need IF)
**Not sure where to put this**
take user input (var guessNum), increase inputNum
_- If ('targetNum' !=== 'inputNum') _May only need an 'If over target number' statement
- If ('targetNum === 'inputNum'), write "You win!!" to Score Box ('scoreDiv'), increase Wins by 1
- If ('targetNum' !=== 'inputNum'), write "You lose!!" to Score Box ('scoreDiv), increase Losses by 1



### Variables
- var targetNum -- this is the random number to target with the gem clicks.  This gets updated once a round.  (some statement changes this)
    - var targetNum = targetArray[math random function - "[Math.floor(Math.random() * myWords.length)]; "]

- var guessNum -- comes from user input of 'clicking' on gems.  value comes from each gem and is added to this number,  initially set to 0.
- var inputNum -- gets increased by 'guessNum'
- var gemNum -- number assigned from 'guessArray', goes to each image.  _not sure about this one

### Arrays
- var targetArray -- this array contains the random target numbers (19 through 120) to guess 
- var guessArray -- this array contains the random guess numbers assigned to gem images (1 through 12)

- Need a collection that holds the images -- array?  object?
- var gemArray -- array that holds each image?


## Additional Notes
This may help:

    var someArray = [];  //empty array
    var myRand = "";  //random number

    for(var x = 1; x <= 120; x++) { //creates array with numbers from 1 to 120 
      someArray.push(x);
    };
    console.log(someArray);

    var randO = document.getElementById("randomX"); //creates var for 'id = randomX'

    for(var i = 0; i < 4; i++) {  //creates 4 random numbers from my array "someArray", output to 'id = randomX'
      myRand = Math.floor(Math.random() * someArray.length);
      console.log(myRand);
      //console.log("<br>");
      randO.innerHTML += myRand + "<br>";
    };
    

- This works for writing images to screen -- still need to figure out how to assign a value (take from the "Crystal" in class activity)

        var imageGem = $("<img>");
        imageGem.addClass("imageGemBtn");
        imageGem.attr("src", "https://via.placeholder.com/150" );
        $(".gemDiv").append(imageGem);


- This is from the Crystal in-class activity:

         // This time, our click event applies to every single crystal on the page. Not just one.
         $(".crystal-image").on("click", function() {
         
           // Determining the crystal's value requires us to extract the value from the data attribute.
           // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
           // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
           // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

           var crystalValue = ($(this).attr("data-crystalvalue"));
           crystalValue = parseInt(crystalValue);
           // We then add the crystalValue to the user's "counter" which is a global variable.
           // Every click, from every crystal adds to the global counter.
           counter += crystalValue;

           // All of the same game win-lose logic applies. So the rest remains unchanged.
           alert("New score: " + counter);

           if (counter === targetNumber) {
             alert("You win!");
           }

           else if (counter >= targetNumber) {
             alert("You lose!!");
           }

         });
