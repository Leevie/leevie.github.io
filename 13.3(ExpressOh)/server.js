// Dependencies
// =============================================================

var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = []

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  // Displays all tables
  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

    // Displays all tables
    app.get("/api/waitlist", function(req, res) {
      return res.json(tables);
    });
  

  //maybe not needed?
  app.post("/api/tables", function(req, res) {

    var newTable = req.body;
    console.log(newTable)
    tables.push(newTable)
    res.json(newTable)

     });


  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });