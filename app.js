var express = require("express");
var app = express();

app.set('view engine','ejs');

var routes = require('./routes');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// home

app.get('/', routes.home);

app.get('/about', routes.about);

//app.get('/about', routes.about);
//app.get('/demo', routes.demo);

//app.get('*', routes.notFound);

app.listen(process.env.PORT || 80);