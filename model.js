var request = require('request');

exports.get = function (req, res) {
  request.get({url: getUrl(req)}, function(err, response, body) {
    send(err, response, body, res);
  });
};

exports.post = function post(req, res) {
  request.post({url: getUrl(req), json: req.body, followAllRedirects: true}, function(err, response, body) {
    send(err, response, body, res);
  });
};

function send(err, response, body, res) {
  if (err || response.statusCode !== 200) {
    return res.json({error: 'Service not found'});
  }  
  if ('application/json' !== response.headers['content-type'].split(';')[0]) {
    return res.json({error: 'GAS error'});
  }
  if (body === 'undefined') {
    return res.json({error: 'Items not found'});
  }
  if (typeof body === 'object') {
    return res.json(body);
  }
  return res.json(JSON.parse(body));
}

function getUrl(req) {
  var url = 'https://script.google.com/macros/s/' + req.params.script_id + '/exec';
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