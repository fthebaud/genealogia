'use strict';
let express = require('express');

let personRouter = express.Router();

// route middleware that will happen on every request
personRouter.use(function (req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    // continue doing what we were doing and go to the route
    next();
});

personRouter.all('*', function (req, res) {
  res.send('YOLO');
});

module.exports = personRouter;
