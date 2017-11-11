/*jslint node:true */
'use strict';

// Declarations
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    sequelize = require('sequelize'),
    mysql = require('mysql'),
    dbConnection = require('./db/db-connect');
    
// Application setup
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));


// Db Connection
dbConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//Routing requirements 
app.get('/', function(req,res){
    res.render('home');
});

app.post('/query', function(req,res){
   var connection_string = `SELECT * FROM product WHERE name LIKE '%${req.body.query}%'`;
   dbConnection.query(connection_string, function(err, result){
       if (err){
           console.log(err);
            console.log("SQL Query: " + mysql.raw(connection_string).toSqlString());
       }else{
           console.log("SQL Query: " + mysql.raw(connection_string).toSqlString());
           res.setHeader('Content-Type', 'application/json');
           res.send(JSON.stringify(result));
       }
   });

});

app.listen(process.env.PORT | 3000, process.env.IP, function(){
    console.log("Server started...");
});