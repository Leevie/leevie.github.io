
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD9sYVQn5kZgnbU84rxmzdhxMMGGO49dgE",
    authDomain: "train-scheduler-31304.firebaseapp.com",
    databaseURL: "https://train-scheduler-31304.firebaseio.com",
    projectId: "train-scheduler-31304",
    storageBucket: "train-scheduler-31304.appspot.com",
    messagingSenderId: "400174851283"
};
firebase.initializeApp(config);

var database = firebase.database(); // database to a variable

$("#click-button").on("click", function (event) {
    event.preventDefault();
    var trainName = $("#train-name").val().trim();
    var trainDest = $("#train-dest").val().trim();
    var trainFirst = $("#train-first").val().trim();
    var trainFreq = $("#train-freq").val().trim();

    $("#train-name").val("");  // These clear out the form
    $("#train-dest").val("");
    $("#train-first").val("");
    $("#train-freq").val("");

    database.ref().push({ // Writing the variable "clickCounter" to the database as a key/value pair -- clickCounter
        // increments it before hand so it's writing the incremented value each time "#click-button" is clicked.

        train: trainName,
        destination: trainDest,
        firstTrain: trainFirst,
        frequency: trainFreq

    });
});


database.ref().on("child_added", function (childSnapshot) {
    console.log("Made it to 'child_added' function")
    console.log("This is the snap:  " + childSnapshot.key);
    var train = childSnapshot.val().train;
    var destination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().firstTrain;
    var frequency = childSnapshot.val().frequency;

    console.log(train);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);

    // Calculating code: start

    var firstTimeConverted =moment(firstTrain, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    var currentTime = moment(moment()).format("hh:mm");
    console.log("CURRENT TIME: " + currentTime);

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("Difference in Time:  " + diffTime);

    var tRemainder = diffTime % frequency;
    console.log(tRemainder);

    var tMinutesTillTrain = frequency - tRemainder;
    console.log("Minutest til Train:  " + tMinutesTillTrain);


    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("Arrival Time:  " + moment(nextTrain).format("hh:mm"));
    var nextTrainTime = moment(nextTrain).format("hh:mm");

    // Calculating code: stop


    var rowHtml = $("<tr>");
    $(rowHtml).append("<th scope='row'>" + train + "</th>",
        "<td>" + destination + "</td>",
        "<td>" + nextTrainTime + "</td>",
        "<td>" + frequency + "</td>",
        "<td>" + tMinutesTillTrain + "</td>");
    $("#train-table").append(rowHtml);
});
    // Refresh the times





$(document).ready(function () {
    // Create two variable with the names of the months and days in an array
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    // Create a newDate() object
    var newDate = new Date();
    // Extract the current date from Date object
    newDate.setDate(newDate.getDate());
    // Output the day, date, month and year   
    $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

    setInterval(function () {
        // Create a newDate() object and extract the seconds of the current time on the visitor's
        var seconds = new Date().getSeconds();
        // Add a leading zero to seconds value
        $("#sec").html((seconds < 10 ? "0" : "") + seconds);
    }, 1000);

    setInterval(function () {
        // Create a newDate() object and extract the minutes of the current time on the visitor's
        var minutes = new Date().getMinutes();
        // Add a leading zero to the minutes value
        $("#min").html((minutes < 10 ? "0" : "") + minutes);
    }, 1000);

    setInterval(function () {
        // Create a newDate() object and extract the hours of the current time on the visitor's
        var hours = new Date().getHours();
        // Add a leading zero to the hours value
        $("#hours").html((hours < 10 ? "0" : "") + hours);
    }, 1000);
});
