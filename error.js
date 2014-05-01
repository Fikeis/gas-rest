module.exports = function (app) {
  // 404s
  app.use(function (req, res, next) {
    res.status(404);

    if (req.accepts('html')) {
      return res.send('<h2>Not found</h2>');
    }

    if (req.accepts('json')) {
      return res.json({ error: 'Not found' });
    }

    // default    
    res.send('Not found');
  })

   // 500
  app.use(function (err, req, res, next) {
    console.error('Error at %s\n', req.url, err.stack);
    res.send(500, 'Oops! I did it again...');
  })
}