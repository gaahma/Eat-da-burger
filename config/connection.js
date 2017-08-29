var mysql = require("mysql");
var connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burger_db"
  });
}

/*For deployment on Heroku
var connection = mysql.createConnection({
  host: "iwqrvsv8e5fz4uni.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "o5kz6ydmdvcdwz8e",
  password: "f00twxk0pjhx5x1b",
  database: "burger_db"
});*/

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;