// server.js
// set up
var express         = require('express');
var logger          = require("./utils/logger");
var morgan          = require('morgan');
var util            = require('util');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var cors            = require('cors');
var port            = 3001;
var app             = express();

// configuration
app.use(cors());                                                // enable cross origin requests
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());                                      // allows us to simulate verbs such as put / delete if needed.

// setup logging
logger.info("Overriding 'Express' logger");
app.use(require('morgan')("combined", { "stream": logger.stream }));

//requires
require('./routes')(app);

// listen (start app with node server.js
app.listen(port);
logger.info("App listening on port " + port);