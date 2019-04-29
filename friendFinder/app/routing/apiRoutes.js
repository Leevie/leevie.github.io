let friendDB = require("../data/friend");

module.exports = function(app){




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

}