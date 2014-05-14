var model = require('./model');
var lang = require('./lang');

module.exports = function (app) {
  app.route('/').get(function(req, res) {
    res.render('index', { lang: lang.eng });
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
    .post(function(req, res) {
      model.post(req, res);
    })
    .put(function(req, res) {
      model.post(req, res);
    })
    .delete(function(req, res) {
      req.remove = true;
      model.get(req, res);
    });

  require('./error')(app);
};