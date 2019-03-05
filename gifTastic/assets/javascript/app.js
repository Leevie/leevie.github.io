



var topics = ["Belle", "Ariel", "Princess Aurora", "Snow White", "Rapunzel", "Gaston", "Ursala", "Malefacent", "Ravenna", "Mother Gothel"];
// Creates the Buttons
$("#gif-div-btn").html("");
for (var i = 0; i < topics.length; i++) {
    var div = $("<div>");
    div.addClass("btn btn-outline-primary gif-button")
        .attr("gif-name", topics[i])
        .text(topics[i]);
    $("#gif-div-btn").append(div);
};

$("#gif-search").on("click", function(event) {  // Need a different event versus 'click'
    event.preventDefault();
    var a = $(this).val().trim();
    topics.push(a);
    console.log(topics);
    // may need to Create this as a function
    $("#gif-div-btn").html("");
    for (var i = 0; i < topics.length; i++) {
        var div = $("<div>");
        div.addClass("btn btn-outline-primary gif-button")
            .attr("gif-name", topics[i])
            .text(topics[i]);
        $("#gif-div-btn").append(div);
    };
    //////

});

// Performs actions to search for gifs when clicked, display them to the screen.
$(".btn").on("click", function () {
    $("#gif-div").html("");  // This should clear the DIV each time so only one set is displayed

    var myKey = "BGLn1MChCH92a5eM0yluChMk89OWrItU";
    var searchVar = $(this).attr("gif-name");  // Using 'tag' to search, may switch to 'search' URL and use 'q'(query) if results undesirable
    var ratingVar = "G";
    var limitVar = 10;
    var offsetVar = Math.floor(Math.random() * 15);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + myKey + "&q=" + searchVar + "&limit=" + limitVar + "&offset=" + offsetVar  + "&rating=" + ratingVar;

    console.log("This is offsetVar:  " + offsetVar);
    console.log("This is searchVar:  " + searchVar);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) {
        console.log(queryURL);  // console.logging the URL
        console.log(response);
        var results = response.data;
        console.log(results);


            for(var d = 0; d < results.length; d++) {
            console.log("I GOT HERE!");
            var gifCard = $("<div>")
            .addClass("card")
            .attr("id", "gif-card")
            .attr("style", "width: auto;");
            // .text("This is some text");

            var gifImage = $("<img>")
            // .attr("src", results[d].images.fixed_height_small_still.url) // STATIC (default state) image URL string of object
            .attr("src", results[d].images.fixed_height_small.url) // ANIMATED (to show Gavin)
            .attr("gif-animated", results[d].images.fixed_height_small.url) // ANIMATED image URL string of object
            .attr("gif-static", results[d].images.fixed_height_small_still.url) // STATIC image URL string of object
            .attr("gif-state", "animated") // reflects the state of the .gif
            .attr("id", "gifImage")
            .addClass("gifImages");
            $("#gif-div").append(gifCard) 
            gifCard.append(gifImage);
            gifCard.append("<div class='card-body'>" + "<p class='card-text'>" + "Rated:  " + results[d].rating.toUpperCase() + "</p>");  // Evil **** Genius!!

            }



        });


        
});

$(document).on("click",".gifImages", function() {  // (".gif") didn't work, trying ("<img>")-- didn't work, trying an id--DIDN'T WORK!  revisit
console.log("I MADE IT TO 'CLICK'");

var state = $("#gifImage").attr("gif-state");


if(state === "static") {  // If static, change the URL to the animated .gif, change the attr 'state' to animated
  $(this).attr("src", $(this).attr("gif-animated"));
  $(this).attr("gif-state", "animated");
  
}else if (state === "animated") {  // Vice-versa of above  
  $(this).attr("src", $(this).attr("gif-static"));
  $(this).attr("gif-state", "static");
};
});
