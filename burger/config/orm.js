var connection = require("./connection");


var orm = {

selectAll: function(queryInput, tableToSearch){
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [queryInput, tableToSearch], function(err, result){
        if (err) throw err;
        console.log(result);
    });
},


insertOne: function(tableToInsert, insertStr1, insertBool1, insertVal1, insertVal2){
    var queryString = "INSERT INTO ?? (?, ?) VALUES (?, ?)"
    connection.query(queryString, [tableToInsert, insertStr1, insertBool1, insertVal1, insertVal2], function(err, result){
        if (err) throw err;
        console.log(result);
    })
},

updateOne: function(tableToUpdate, updateVar, condition, cb) {
    var queryString = "UPDATE ;



}

}

} // end of ORM


module.exports = orm;

update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },