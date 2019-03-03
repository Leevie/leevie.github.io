



var topics = ["Belle", "Ariel", "Princess Aurora", "Snow White", "Rapunzel", "Gaston", "Malefacent", "Ravenna", "Mother Gothel"];
// Creates the Buttons
for (var i = 0; i < topics.length; i++) {
    var div = $("<div>");
    div.addClass("btn btn-outline-primary gif-button")
        .attr("gif-name", topics[i])
        .text(topics[i]);
    $("#gif-div-btn").append(div);
};

// Performs actions to search for gifs when clicked
$(".btn").on("click", function () {
    $("#gif-div").html("");  // This should clear the DIV each time so only one set is displayed

    var myKey = "BGLn1MChCH92a5eM0yluChMk89OWrItU";
    var searchVar = $(this).attr("gif-name");  // Using 'tag' to search, may switch to 'search' URL and use 'q'(query) if results undesirable
    var ratingVar = "G";
    var limitVar = 10;
    var offsetVar = Math.floor(Math.random() * 15);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + myKey + "&q=" + searchVar + "&limit=" + limitVar + "$offset=" + offsetVar  + "&rating=" + ratingVar;

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
            var gifImage = $("<img>")
                .attr("src", results[d].images.fixed_height_small.url); // image URL string of object


            $("#gif-div").append(gifImage);     

            }

        });
});