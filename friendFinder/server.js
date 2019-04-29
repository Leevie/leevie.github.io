var express = require("express");
var path = require("path");



var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("./app/public"))


// Routes
require("./app/routing/htmlRoutes")(app);  // Need to ask Nate about this??  'borrowed' from him.  Also, he has (app) after this, why?
require("./app/routing/apiRoutes")(app)  // 1. Build this first!














// Listening function
app.listen(PORT, function() {
    console.log("I'm Listening... on PORT: " + PORT);
})


