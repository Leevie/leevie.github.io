// KEEP THIS FILE FOR REFERENCE!!  MAKE A COPY OF THIS TO PRESENT FOR HOMEWORK!

require("dotenv").config();
var moment = require("moment");
var keys = require("./keys.js");
// console.log(keys);
var Spotify = require("node-spotify-api");
var axios = require("axios");

process.argv.splice(0, 2);
var argvInput1 = process.argv.shift();
var argvInput2 = process.argv;

// console.log(argvInput1);
// console.log(argvInput2);

// Functions for API/AXIOS Calls
// Start --> BANDS_IN_TOWN
var bandsintown = keys.bandsInTown;
var bandsFunc = function(artistVar) {
  var artist = artistVar.join(" ");
  //   console.log(artist);
  var queryUrl =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=" +
    bandsintown.id;

  axios.get(queryUrl).then(function(response) {
    //   console.log("This is response.data.length before: " + response.data.length);
    if (response.data.length > 10) {
      //turn this into a terneiry
      response.data.length = 10;
    }
    var loopLength = response.data.length;
    // console.log("This is loopLength: " + loopLength);
    for (i = 0; i < loopLength; i++) {
      //Name of the venue
      var venue = response.data[i].venue.name;
      //Venue location
      var city = response.data[i].venue.city;
      var region = response.data[i].venue.region;
      var country = response.data[i].venue.country;
      var location = city + ", " + region + ", " + country;
      //Date of the Event (use moment to format this as "MM/DD/YYYY")
      var rawDate = response.data[i].datetime;
      var eventDate = moment(rawDate).format("dddd, MMMM Do YYYY, h:mm a");

      console.log("========================================");
      console.log("=  " + venue);
      console.log("=  " + location);
      console.log("=  " + eventDate);
      console.log("========================================");
      console.log("");
    }
  });
};
// End --> BANDS_IN_TOWN

// Start --> SPOTIFY
var spotifyFunc = function(argvInput2) {
  var spotify = new Spotify(keys.spotify);

  var queryVar = argvInput2.join(" ");
  console.log(queryVar);

  spotify.search({ type: "track", query: queryVar, limit: 10 }, function(
    err,
    data
  ) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    var itemArray = data.tracks.items;
    // console.log(itemArray)

    for (var i = 0; i < itemArray.length; i++) {
      // Why didn't a foreach loop work????
      // START --> FOR ARTISTS
      // var artistArray = itemArray[i].artists;
      // var tempArray = [];
      // for(var key in artistArray){tempArray.push() = artistArray[key]};  // iterate the Object to find ALL artists
      console.log("MADE IT HERE!");
      var artist = itemArray[i].album.artists[0].name; //artistArray.name // + ", " + (artistArray[1].name !== undefined ? artistArray[1].name : "" ); // this may work?
      // END --> FOR ARTISTS

      var song = itemArray[i].name;
      var preview =
        itemArray[i].preview_url === null
          ? itemArray[i].external_urls.spotify
          : itemArray[i].preview_url; // If preview_url is NULL, assign 'open.spotify.com' url
      var album = itemArray[i].album.name;

      console.log("========================================");
      console.log("= Artist:  " + artist);
      console.log("= Song:  " + song);
      console.log("= Preview:  " + preview);
      console.log("= Album:  " + album);
      console.log("========================================");
    }
  });
};
// End --> SPOTIFY

// Start --> OMDB
var omdbKey = "trilogy";
var omdbFunc = function(movieVar) {
  var movieName = movieVar.join(" ");
  // console.log(movieName);
  var queryUrl =
    "http://www.omdbapi.com/?t=" +
    movieName.trim("%20") +
    "&y=&plot=short&apikey=" +
    omdbKey;

  axios.get(queryUrl).then(function(response) {
    var movieObj = response.data;

    var title = movieObj.Title;
    var year = movieObj.Year;
    var foundImdbValue = movieObj.Ratings.filter(
      obj => obj.Source === "Internet Movie Database"
    );
    var foundRottenValue = movieObj.Ratings.filter(
      obj => obj.Source === "Rotten Tomatoes"
    );
    var imdbRating = foundImdbValue[0].Value;
    var rated = movieObj.Rated;
    var rottenRating = foundRottenValue[0].Value;
    var country = movieObj.Country;
    var language = movieObj.Language;
    var plot = movieObj.Plot;
    var actors = movieObj.Actors;

    console.log("=================================================");
    console.log("=  Movie                  :  " + title);
    console.log("=  Release Year           :  " + year);
    console.log("=  Rated                  :  " + rated);
    console.log("=  IMDB Rating            :  " + imdbRating);
    console.log("=  Rotten Tomatoes Rating :  " + rottenRating);
    console.log("=  Country Produced       :  " + country);
    console.log("=  Language               :  " + language);
    console.log("=================================================");
    console.log("=  Movie Plot             :  " + plot);
    console.log("===========================");
    console.log("=  Actors/Actresses       :  " + actors);
    console.log("==========================="); //+ "===" + Array(actors.length).join("=")); // THIS WORKS!  adds "=" until the end of the line above!!!


  });
};
// End --> OMDB

// Command-Line Inputs -- Change to a Switch or add the "inquirer npm"
if (argvInput1 === "concert-this") {
  bandsFunc(argvInput2);
}
if (argvInput1 === "spotify-this-song") {
  spotifyFunc(argvInput2);
}
if (argvInput1 === "movie-this") {
  omdbFunc(argvInput2);
}
