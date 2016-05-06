var _ = require('underscore-node');
var moment = require('moment');

// app/routes.js
module.exports = function(app) {
    app.get('/api/load', function(req, res) {
      //var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
      
      var load = {
        uptime: Math.floor(Math.random() * 6) + 1 ,
        time: moment().format("MM/DD/YYYY h:mm:ss")
      };
   
      res.status(200).send(load);
    });

};
