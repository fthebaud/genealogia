'use strict';

// importing the packages we need
let express = require('express');
let bodyParser = require('body-parser');

// creating the express application
let app = express();

// http server listening on port xxxx
// process.env contient les variables d'environnement du process
let port = process.env.port || 8000;
console.log(`listenning on port ${port}`);
app.listen(port);


// configuring app to use body-parser. No path : it will be called on every request
// bodyParser.urlencode() : parses url-encoded bodies
// bodyParser.json() : parses json bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use() : mounts a specified middleware function at a specified path.
// middleware functions is a way to do something before a request is processed
// no path or "/" = function executed for every request
// express.static() : only built-in middleware function of express. Serves static files from a path
// __dirname : directory in which the currently executing script resides
app.use('/', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

//importing router for person API
let personRouter = require('./routes/personRouter');
app.use('/person', personRouter);
