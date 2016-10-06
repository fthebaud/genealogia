'use strict';

// import express
let express = require('express');
// creation of a router
let personRouter = express.Router();


// route middleware that will happen on every request
personRouter.use(function (req, res, next) {
  // log each request to the console
  console.log(`Received a call to person API, with parameters : method=${req.method}, url=${req.url}`);
  // continue doing what we were doing and go to the route
  next();
});


// import person model
let Person = require('../app/models/person');


/**
 *
 *  api/persons/
 *
 */
personRouter.route('/')

  // CREATION OF ONE PERSON [POST http://<server>:<port>/api/persons]
  .post(function (req, res) {
    // create a new instance of the Person model
    var p = new Person();
    // Copy the variables
    Object.assign(p, req.body);
    // save the bear and check for errors
    p.save(function (err) {
      if (err) {
        res.send(err);
      }
      else {
        res.json({
          message: 'Person created!'
        });
      }
    });
  })

  // GET ALL THE PERSONS [GET http://<server>:<port>/api/persons]
  .get(function (req, res) {
    Person.find(function (err, persons) {
      if (err) {
        res.send(err);
      }
      else {
        res.json(persons);
      }
    });
  });


/**
 *
 *  api/person/:person_id
 *
 */
personRouter.route('/:person_id')

  // GET ONE PERSON [GET http://<server>:<port>/api/persons/:person_id]
  .get(function (req, res) {
    Person.findById(req.params.person_id, function (err, person) {
      if (err) {
        res.send(err);
      }else{
        res.json(person);
      }
    });
  })

  // UDPATE ONE PERSONNE [PUT http://<server>:<port>/api/persons/:person_id]
  .put(function (req, res) {
      Person.findById(req.params.person_id, function (err, person) {
        if (err) {
          res.send(err);
        }
        else {
          // On update l'objet
          Object.assign(person, req.body);
          // Puis on le sauvegarde
          person.save(function (err) {
            if (err) {
              res.send(err);
            } else {
              res.json({message : 'person updated'});
            }
          });
        }
      });
    })

    // DELETE ONE PERSONNE [DELETE http://<server>:<port>/api/persons/:person_id]
  .delete(function (req, res) {
    Person.remove({
      _id: req.params.person_id
    }, function (err) {
      if (err) {
        res.send(err);
      }
      else {
        res.json({
          message: 'Successfully deleted'
        });
      }
    });
  });


// export du router
module.exports = personRouter;
