'use strict';

let express = require('express');
let Person = require('../app/models/person');


let personRouter = express.Router();

// route middleware that will happen on every request
personRouter.use(function (req, res, next) {
  // log each request to the console
  console.log(`Received a call to person API, with parameters : method=${req.method}, url=${req.url}`);
  // continue doing what we were doing and go to the route
  next();
});

personRouter.route('/')
  // CREATION OF ONE PERSON [POST http://<server>:<port>/api/person]
  .post(function (req, res) {
    // create a new instance of the Person model
    var p = new Person();
    // Copy the variables
    Object.assign(p, req.body);
    // save the bear and check for errors
    p.save(function (err) {
      if (err) {
        res.send(err);
      }else{
        res.json({
          message: 'Person created!'
        });
      }
    });

  });

module.exports = personRouter;
