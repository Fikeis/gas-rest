var express    = require('express');
var app        = express();

require('./routes')(app);

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Magic happens on port ' + port);  
});