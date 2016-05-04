var _ = require('underscore-node');
// app/routes.js
module.exports = function(app) {
    app.get('/api/load', function(req, res) {
      var load = {};
      load.uptime = 1;
      
      res.status(200).send(load);
    });

};
