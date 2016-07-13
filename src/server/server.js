// server.js

// set up ========================
var express         = require('express');
var logger          = require("./utils/logger");
var morgan          = require('morgan');                 // log requests to the console (express4)
var util            = require('util');
var bodyParser      = require('body-parser');            // pull information from HTML POST (express4)
var methodOverride  = require('method-override');        // simulate DELETE and PUT (express4)
var port            = 3001;
var app             = express();                         // create our app w/ express

//requires
require('./routes')(app);

// configuration =================

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

logger.debug("Overriding 'Express' logger");
app.use(require('morgan')("combined", { "stream": logger.stream }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// listen (start app with node server.js) ======================================
app.listen(port);
logger.info("App listening on port " + port);