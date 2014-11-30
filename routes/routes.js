'use strict';

module.exports = function(app) {

  app.post('/sqrt', function(req, res) {
    var num = req.body.number;
    if (!num) res.status(500).json({sqrt: "error"});
    res.status(200).json({sqrt: Math.sqrt(num)});
  });
}