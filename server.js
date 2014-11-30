'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended:true}));

//use bodyparser middleware
app.use(bodyparser.json());

app.use(express.static(__dirname + '/build'));

require('./routes/routes')(app);

app.listen(process.env.port || 3000, function() {
  console.log('server running');
});
