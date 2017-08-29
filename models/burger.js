var orm = require("../config/orm.js");

var burger = {
  all: function(callback){
    orm.selectAll(function(data){
      callback(data);
    });
  },
  post: function(burger, callback){
    orm.insertOne(burger, function(data){
      callback(data);
    });
  },
  update: function(id, devoured, callback){
    orm.updateOne(id, devoured, function(data){
      callback(data);
    });
  },
  delete: function(column, condition, callback){
    orm.delete(column, condition, function(data){
      callback(data);
    })
  }
}


module.exports = burger;