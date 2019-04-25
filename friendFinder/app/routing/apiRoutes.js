
module.exports = function(app){


let friendList = [];


app.get("/api/friends", function(req, res) {
    return res.json(res)
});

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    friendList.push(newFriend);
    res.json(newFriend);
});

}