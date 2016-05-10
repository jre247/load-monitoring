require('babel-core/register');


var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();

app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 8080);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

require('./routes.js')(app);

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var onlineUsers = 0;
var moment = require('moment');
var monitor = require("os-monitor");

var initializeMonitor = function(io){
   // basic usage
      monitor.start();

      // more advanced usage with configs.
      monitor.start({ delay: 3000 // interval in ms between monitor cycles
                    , freemem: 1000000000 // freemem under which event 'freemem' is triggered
                    , uptime: 1000000 // number of secs over which event 'uptime' is triggered
                    , critical1: 0.7 // loadavg1 over which event 'loadavg1' is triggered
                    , critical5: 0.7 // loadavg5 over which event 'loadavg5' is triggered
                    , critical15: 0.7 // loadavg15 over which event 'loadavg15' is triggered
                    , silent: false // set true to mute event 'monitor'
                    , stream: false // set true to enable the monitor as a Readable Stream
                    , immediate: false // set true to execute a monitor cycle at start()
                    });


      // define handler that will always fire every cycle
      monitor.on('monitor', function(event) {
        var load = event.loadavg[0];
        var time = moment().format("MM/DD/YYYY h:mm:ss");
        
        var viewModel = {
          uptime: load,
          time: time
        }
        
        io.on('connection', function(socket){
          io.emit('loadUpdate', { load: viewModel });
        });
        
        
      });
}

initializeMonitor(io);

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

//http.listen(app.get('port'), "127.0.0.1");
