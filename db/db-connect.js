var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
    port: 3306,
  user: "ExampleUser",
  password: "ExamplePassword",
  database: 'login',
});

module.exports = connection;

