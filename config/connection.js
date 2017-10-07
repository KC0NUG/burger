var mysql = require("mysql");

// The JAWSDB_URL environment variable will look like the following:
//heroku config:set DATABASE_URL='mysql://username:password@hostname:port/default_schema'

var connection = {};

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });

if (process.env.JAWSDB_URL) {
	console.log(process.env.JAWSDB_URL);
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
	const DEFAULT_URL='mysql://root:NULL@localhost/burgers_db';
	console.log(DEFAULT_URL);
	connection = mysql.createConnection(DEFAULT_URL);
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;