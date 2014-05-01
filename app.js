var express    = require('express');
var path       = require('path');
var favicon    = require('static-favicon');
var logger     = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Magic happens on port ' + port);  
});