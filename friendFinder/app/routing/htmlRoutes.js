// var path = require("path")  // Nate had this in his code -- need to ask him why??  Shouldn't server.js have and use this?


// Nate wrapped this in a function and assigned to 'module.exports'.  I get the 'module.exports, but why wrap all of these calls into a function?
// module.exports =   
// Researched --  reference: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
var exports = module.exports = {};


app.get("/survey", function(req, res) {
    res.sendfile(path.join(__dirname, "survey.html"));
})

app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "home.html"));
})