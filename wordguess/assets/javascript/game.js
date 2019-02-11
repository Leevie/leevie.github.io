function myFunction() {

// window.onload = function () {

    //  Also didn't work.  :(
    //  document.addEventListener("DOMContentLoaded", function() {
    
    // Argh, that's jQuery, not JS.  Doesn't work. 
    // $(document).ready(function(){  //Not sure if this is needed to let the page load first?
        
        // Targeted word to guess (I created as an Array, but maybe just a String?)
        // var myWord = ["w","o","r","d","f","u","n"];
        // var testArr = [];
        // Set dashes for length of word, placed where word will show up -- #correctGuesses  **NOTE may need to move this under the variables, they haven't been defined yet.
        // for(w = 0; w < myWord.length; w++) {
        //   testArr[w] = "_";
    
        
        //   console.log(testArr);
        // };
    
        // document.getElementById("correctGuesses").innerHTML = testArr.join(' ');
    
        // Empty array delared, will be used for guessed letters
        // var guessAry = [];
    
    
        // Repace with onkeyup event -- document.onkeyup = function(event) {var keyPress = event.key}
        // var guessVar = prompt("Please Guess A Letter:  ");  //maybe this needs to move inside 'for' statement, page isn't loading before this runs
    
        // guessed variable (guessVar) goes into an array (guessAry)
          //needs to be a function that stores the variable, then displays it in a line (document.getElementById(someDiv) = line that displays wrong guesses... ELSE is in the wordArray, word to guess)
          // guessAry.push(guessVar);
        
        //  document.getElementById("wrongGuess");
    
        // for (i = 0; i < getElementById.length; i++) {
        //     for(j = i; guessAry[j] === keyPress;) {
        //       if( guessAry[j] === keyPress) {
        //           alert("WORKS!");
        //       } else {
        //         alert("FAILED")
        //       }
        //     }
        //         };
        //  Re-writing to Allow for 10 tries
    // function guessFunc()  {
    //     for (i = 0; i < 10; i++) {
    //       var guessVar = prompt("Please Guess A Letter:  ");
    //           guessAry.push(guessVar);
    
    //         if(guessAry.indexOf(guessVar) == -1) {
    //           alert("Wrong Letter, try again:");
    //           document.getElementById("wrongGuess").innerHTML = guessVar + " ";
    //         } else {
    //           alert("Awesome, guess another!");
    //           // argh, need function here that switches out the letter for it's position in the 'myWord' array
    //         };
    //       };
    //     } 
    //   guessFunc();  //this didn't work. 
    
    
      //  STARTING EVERYTING FROM SCRATCH!!  ARGH! :(
    
        // Words to be guessed -- maybe an Array?  Figure out how to import words.
        var myWords = ["Ironman","Tony","Hulk","Bruce","Steve","Captain America","Spiderman","Peter"];
    
        // Maybe use the random from Rock,Paper,Scissors assignment to choose a word.
        // Will need to use .indexOf maybe to compare input letter to one in the string?  Maybe word should be an array? 
       // var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        var casedGuessMeWord = myWords[Math.floor(Math.random() * myWords.length)];  // Real word, in it's original case, to be used to reveal at the end.
    
        // Word to be guessed in lowercase
        var guessMeWord  = casedGuessMeWord.toLowerCase();
    
        //Ah.. dashes get stored in an Array insted of written to the page.  Makes sense (thanks, Google!)
        var guessAry = []; 
    
        // Loop to create those dashes
        for(var i = 0; i < guessMeWord.length; i++) {
          guessAry[i] = "_";
        }
    
        // Letters left over  -- may changed this to number of tries
        var lettersLeftOver = guessMeWord.length;
    
        // This runs the game until all letters are guessed.
        while(lettersLeftOver > 0) {
    
          ///// Alert progress of the game from the array with dashes - will fill in as correct letters are guessed.
          alert("Please guess the following word:  " + guessAry.join(" "));
          //var elmtwordToGuess = document.getElementById("wordToGuess");
          //elmtwordToGuess.innerHTML = ("Please guess the following word:  " + guessAry.join(" "));
        
          // function funcGuess () {
          //   alert("Please guess the following word:  " + guessAry.join(" "));
          //   pressedKey();
          // };
    
          // Action Code
          // Changing input to onkeyup event
          // var guessVar = onkeyup;
          
          // document.onkeyup = function pressedKey (event) {

          //   var keyPress = event.key;
          // };
         
    
          var elmtGuessedLetters = document.getElementById("guessedLetters");
    
          ///// This works, but need to replace this with 'onkeyup' function
          // var guessVar = event.key;   //Can't get to work.
          var guessVar = prompt("Please Guess A Letter:  ");  //works
          elmtGuessedLetters.innerHTML += guessVar;
          
    
    
            // For loop for guessing letters
            for(var j = 0; j < guessMeWord.length; j++) {
              if(guessMeWord[j] === guessVar) {
                guessAry[j] = guessVar;
                lettersLeftOver--;
              };
            };
          }; // End of While
          
            // Alerts answer to screen.  Need to change this.  
            // alert(guessAry.join(" "));
            alert("You guessed it!  The answer was " + casedGuessMeWord);
    
        
    
    
    
    // });
    // }
}