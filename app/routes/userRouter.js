'use strict';

/*
 * Imports
 */
let User = require('../models/user');

let responseHelper = require('../modules/helpers/responseHelper');
let passwordHelper = require('../modules/helpers/passwordHelper');

let Message = require('../modules/interface/message');
let ErrorMessage = require('../modules/interface/errorMessage');

let express = require('express');


/*
 * userRouter
 */

let userRouter = express.Router();
userRouter.use(function (req, res, next) {
  console.log(`Received a call to user API, with parameters : method=${req.method}, url=${req.url}`);
  next();
});

/**
 *
 * api/users/
 *
 */
userRouter.route('/')
  // [POST]
  // Create one user
  .post(function (req, res) {
    if (req.body.email && req.body.password1) {
      User.findOne({
        email: req.body.email
      }, function (err, user) {
        if (err) {
          res.send(new ErrorMessage('error while checking if the user already exists', err));
        }
        else {
          if (user) {
            res.status(409).send(new ErrorMessage('Conflict: user already exists.'));
          }
          else {
            console.log('user creation: ', req.body);
            var u = new User();
            u.email = req.body.email;
            // hash and salt password
            let passwordData = passwordHelper.saltHashPassword(req.body.password1);
            u.hash = passwordData.passwordHash;
            u.salt = passwordData.salt;
            u.save(function (err) {
              responseHelper.sendBackErrorOrResult(err, new Message('Account successfully created'), res);
            });
          }
        }
      });
    } else {
        res.status(400).send(new ErrorMessage('login and/or password missing'));
    }
  })

  // [GET]
  // Find all the users, or find one user filtered by email
  .get(function (req, res) {
    if (req.query.email) {
      User.findOne({
        email: req.query.email
      }, function (err, user) {
        responseHelper.sendBackErrorOrResult(err, user, res);
      });
    } else {
      User.find(function (err, users) {
        responseHelper.sendBackErrorOrResult(err, users, res);
      });
    }
  });

/**
 *
 *  api/users/:user_id
 *
 */
userRouter.route('/:user_id')
  // [GET]
  // Find one user through is id
  .get(function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
      responseHelper.sendBackErrorOrResult(err, user, res);
    });
  })

  // [DELETE]
  // Delete one user through his id
  // TODO protect access to this method
  .delete(function (req, res) {
    User.remove({
      _id: req.params.user_id
    }, function (err) {
      responseHelper.sendBackErrorOrResult(err, new Message('User successfully deleted'), res);
    });
  });


// export du router
module.exports = userRouter;
