var bodyParser = require('body-parser');
var model      = require('./model');

module.exports = function Router(app) {
  if (!(this instanceof Router)) {
    return new Router(app);
  }

  app.use(bodyParser());

  app.route('/').get(function(req, res) {
    res.send('This is a main page!');
  });  

  app.route('/api/:script_id/:sheet_name?')
    .get(function(req, res) {      
      model.get(req, res);
    })
    .post(function(req, res) {
      model.post(req, res);
    });

  app.route('/api/:script_id/:sheet_name/:item_id')
    .get(function(req, res) {
      model.get(req, res);
    })
    .put(function(req, res) {
      model.post(req, res);
    })
    .delete(function(req, res) {
      req.remove = true;
      model.get(req, res);
    });
};