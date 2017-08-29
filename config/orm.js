var connection = require("./connection.js");


module.exports.selectAll = function(callback){
  connection.query("select * from burgers", function(err, data){
    if(err) throw err; 
    callback(data);
  });
}

module.exports.insertOne = function(burger, callback){
  connection.query(`INSERT INTO burgers (burger) VALUES (?)`, [burger], function(err, data){
    if(err) throw err;
    callback(data);
  });
}

module.exports.updateOne = function(id, devoured, callback){
  connection.query("update burgers set devoured = ? where id = ?",[devoured, id], function(err, data){
    if(err) throw err;
    callback(data);
  });
}

module.exports.delete = function(column, condition, callback){
  var queryString = "DELETE FROM burgers WHERE ?? = ?";
  var queryArray = [column, condition];
  connection.query(queryString, queryArray, function(err, data){
    if (err) throw err;
    callback(data);
  })
}