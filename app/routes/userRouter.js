'use strict';


let express = require('express');
let userRouter = express.Router();

userRouter.use(function (req, res, next) {
  console.log(`Received a call to user API, with parameters : method=${req.method}, url=${req.url}`);
  next();
});

let User = require('../models/user');

/**
 *
 * api/users/
 *
 */
userRouter.route('/')
  // CREATE ONE USER [POST http://<server>:<port>/api/users]
  .post(function (req, res) {
    User.findOne({
      email: req.body.email
    }, function (err, user) {
      if (err) {
        console.log('erreur', err);
        res.send(err);
      }
      else {
        if (user) {
          console.log('user already existe');
          res.send('user already exist');
        }
        else {
          console.log('user creation: ', req.body);
          var u = new User();
          u.email = req.body.email;

          let password = require('../modules/password');
          let passwordData = password.saltHashPassword(req.body.password1);
          u.hash = passwordData.passwordHash;
          u.salt = passwordData.salt;

          u.save(function (err) {
            if (err) {
              console.log('erreur', err);
              res.send(err);
            }
            else {
              res.send('user Successfully created');
            }
          });
        }
      }
    });
  })

// GET ALL THE USERS [GET http://<server>:<port>/api/users]
.get(function (req, res) {
  User.find(function (err, users) {
    if (err) {
      res.send(err);
    }
    else {
      res.json(users);
    }
  });
});


/**
 *
 *  api/person/:person_id
 *
 */
userRouter.route('/:user_id')

// DELETE ONE USER [DELETE http://<server>:<port>/api/users/:user_id]
.delete(function (req, res) {
  User.remove({
    _id: req.params.user_id
  }, function (err) {
    if (err) {
      res.send(err);
    }
    else {
      res.json({
        message: 'User successfully deleted'
      });
    }
  });
});


// export du router
module.exports = userRouter;
