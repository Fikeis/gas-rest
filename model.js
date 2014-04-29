var request = require('request');

exports.get = function (req, res) {  
  request.get({url: getUrl(req)}, function(err, response, body) {        
    send(err, response, body, res, true);
  });
};

exports.post = function post(req, res) {
  if (req.params.item_id) {
    req.body.id = req.params.item_id;
  }  
  request.post({url: getUrl(req), json: req.body, followAllRedirects: true}, function(err, response, body) {    
    send(err, response, body, res);
  });
};

function send(err, response, body, res, parse) {
  if (!err && response.statusCode == 200) {
    if ('application/json' !== response.headers['content-type'].split(';')[0]) {
      return res.json({error: 'gas error'});
    }
    if (body === 'undefined') {
      return res.json({error: 'not found'});
    }
    if (parse) {
      return res.json(JSON.parse(body));
    }
    return res.json(body);
  }
}

function getUrl(req) {
  var start = 'https://script.google.com/macros/s/';
  var fin   = '/exec';
  var url   = start + req.params.script_id + fin;
  if (req.params.sheet_name) {
   url += '?sheet=' + req.params.sheet_name;
  }
  if (req.params.item_id) {
    url += '&id=' + req.params.item_id;
  }
  if (req.remove) {
    url += '&remove';
  }
  return url;
}