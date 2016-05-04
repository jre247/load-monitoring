var _ = require('underscore-node');
// app/routes.js
module.exports = function(app) {
    app.get('/api/load', function(req, res) {
      var currentTime = new Date();
      
      var load = {
        uptime: 2,
        time: currentTime
      };
   
      res.status(200).send(load);
    });

};
