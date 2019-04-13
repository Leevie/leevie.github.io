// http module
const http = require("http");

const PORT1 = 7000;
const PORT2 = 7500

function handleRequest(request, response) {

    response.end("IT WORKS!! " + request.url);
}

function handleRequest2(request, response) {
    var quoteArray = ["Works, this does", "We're getting the band back together!", "I've been waiting for you, Obi Wan", "Spit-spot!", "You're welcome!"];
    var quoteItr = Math.floor(Math.random() * quoteArray.length);
    response.end("THIS WORKS TOO!! " + quoteArray[quoteItr]);
}

const server1 = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
    console.log("Listening on Port " + PORT1)
})

server2.listen(PORT2, function() {
    console.log("Listening on Port " + PORT2)
})

