// KEEP THIS FILE FOR REFERENCE!!  MAKE A COPY OF THIS TO PRESENT FOR HOMEWORK!

require("dotenv").config();

process.argv.splice(0,2);
var argvInput1 = process.argv.shift();
var argvInput2 = process.argv;

// console.log(argvInput1);
// console.log(argvInput2);



var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var axios = require("axios");

// Functions for API/AXIOS Calls
var bandsFunc = function(artistVar) {
  var artist = artistVar.join(" ");
//   console.log(artist);
  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  axios
    .get(queryUrl)
    .then(function(response) {
    //   console.log("This is response.data.length before: " + response.data.length);
      if(response.data.length > 10) { //turn this into a terneiry 
          response.data.length = 10
        }
        var loopLength = response.data.length;
        // console.log("This is loopLength: " + loopLength);
        for(i = 0; i < loopLength; i++){
        //Name of the venue
        var venue = response.data[i].venue.name;
        //Venue location
            var city = response.data[i].venue.city;
            var region = response.data[i].venue.region
            var country = response.data[i].venue.country;
        var location = (city + ", " + region + ", " + country);
        //Date of the Event (use moment to format this as "MM/DD/YYYY")
        var eventDate = response.data[i].datetime;
        
        console.log("========================================");
        console.log("=  " + venue);
        console.log("=  " + location);
        console.log("=  " + eventDate);
        console.log("========================================");
        console.log("");
        }
    });
};



// Command-Line Inputs
if (argvInput1 === "concert-this") {
bandsFunc(argvInput2);
}

