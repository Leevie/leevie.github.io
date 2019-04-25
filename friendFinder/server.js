var express = require("express");
var path = require("path");


var friendDB = // This will go into the friend.js file, eventually.
    [
        {
            "name": "Ahmed",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores": [
                5,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                4,
                1
            ]
        },
        {
            "name": "Jane Doe - (pre-populated)",
            "photo": "image place holder",
            "scores": [
                5,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                4,
                1
            ]
        },
        {
            "name": "John Doe - (pre-populated)",
            "photo": "image place holder",
            "scores": [
                5,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                4,
                1
            ]
        },
    ];  

var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("./app/public"))

//require(".app/routing/htmlRoutes.js")(app);  // Need to ask Nate about this??  'borrowed' from him.  Also, he has (app) after this, why?
//require("app/routing/apiRoutes.js")(app)  // 1. Build this first!





// Routes

app.get("/api/friends", function(req, res) {
    console.log("------- Inside '/api/friends Route Ma Dewd!!  '--------");
    return res.json(friendDB);
});

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);

    friendDB.push(newFriend);
    return res.json(friendDB);
});

app.get("/survey", function(req, res) {
    res.sendfile(path.join(__dirname, "/app/public/survey.html"));
})

app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "/app/public/home.html"));
})




// Listening function
app.listen(PORT, function() {
    console.log("I'm Listening... on PORT: " + PORT);
})


