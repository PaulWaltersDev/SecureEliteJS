var express = require("express");
var app = express();

app.set('view engine','ejs');

var routes = require('./routes');
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// home

app.get('/', routes.home);

app.get('/about', routes.about);

app.get('/products', routes.products);

app.get('/protectfx', routes.protectfx);

app.get('/contact', routes.contact);

app.post('/demo_register', routes.demo_register);

//app.get('/about', routes.about);
//app.get('/demo', routes.demo);

//app.get('*', routes.notFound);

app.listen(process.env.PORT || 80);