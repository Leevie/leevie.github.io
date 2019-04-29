// Connection.js  -- connection to the database

var mysql = require("mysql");
var keys = require("keys.env");

const db_port = 3306;
const db_host = "localhost";
const db_user = keys.user;
const db_pwd = keys.password;
const database = "burgers";

var connection = mysql.createConnection({
    port: db_port,
    host: db_host,
    user: db_user,
    password: db_pwd,
    database: database
})

module.exports = connection;