# Trivia Game!

[Link to Game Demo](https://youtu.be/xhmmiRmxQ8Q)

##  Theme Suggestions:
- Star Wars
- Avengers
- Use an API? (if Star Wars, does Wookepedia have an API?)

### Optionals
- Display picture when correct/wrong
- Fireworks if over 50% at the end (Brian's Bonus)
- Sound?

### Challenges
- Function, everything!
- Object-ify everything?
- On-Click events?
- On-Keyup events?
- Learn/ingrain setTimeout/setInterval
- Randomize questions (later!) Way to randomize an array?  Put question-functions in an array and randomize?

### Game Play
- Start button (-button, but change to a -modal?)
- Game Ends after 'X' Questions are answered
- Player gets 15 seconds per question
- Answers:
    -- Correct answer = correct image displays and a congratulatory message
    -- Wrong answer = default "wrong" image displays
- Final screen shows correct answers, incorrect answers, and number of questions.
- Option to restart the game (reset function).

### Notes
- Keep it Simple!!  Elaborate later!
- Each question as a function?  
    -- Object -- call from objects
    -- Function contains Object?
    -- Sample Question Object:
    -- questionOneObj = {
        question:
        guesses: (array)
        anwser:
        function: (definition)
            printout $this.question.html("Where Questions go -div")
            printout guesses[1,2,3,4]  *KIS - $this.html(guesses[1] + -br + guesses[2]...)
            (Some Way to guess.. onKeyup?  on.Click?)
            if correct guess, REWARD (gif? message? both?)
                else, FAILED message/gif (You've failed me for the last time?)
        function call() -- (can I call a function in an object?)
    }
- Welcome message with "Start" button
- Each question-function overwrites the question-div  $this.html()
- End function overwrites the question-div, 
    -- displays total questions
    -- questions corr 