var _ = require('underscore-node');
var moment = require('moment');
var monitor = require("os-monitor");

// app/routes.js
module.exports = function(app) {
    app.get('/api/load', function(req, res) {
      //var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
      
      cpu.totalLoad(function(error, results) {
          if(error) {
            return console.log(error);
          }
          
          // results (single cpu in percent) =>
          // [8]
          
          // results (multi-cpu in percent) =>
          // [3, 10]
          
          var load = {
            uptime: results,
            time: moment().format("MM/DD/YYYY h:mm:ss")
          };
      
          res.status(200).send(load);
      });
        
      
    });

};
