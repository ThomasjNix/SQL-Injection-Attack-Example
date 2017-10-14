/*jslint node:true */
'use strict';

// Declarations
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
    
// Application setup
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

// Routing requirements 
app.get('/', function(req,res){
    res.render('home');
});

app.listen(process.env.PORT | 3000, process.env.IP, function(){
    console.log("Server started...");
});