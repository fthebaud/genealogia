'use strict';

/*
 * Imports
 */
let Account = require('../models/account');

let responseHelper = require('../modules/helpers/responseHelper');
let passwordHelper = require('../modules/helpers/passwordHelper');

let express = require('express');


/*
 * accountRouter
 */

let accountRouter = express.Router();
accountRouter.use(function (req, res, next) {
  console.log(`Received a call to account API, with parameters : method=${req.method}, url=${req.url}`);
  next();
});

/**
 *
 * api/accounts/
 *
 */
accountRouter.route('/')
  // [POST]
  // Create one account
  .post(function (req, res) {
    if (req.body.email && req.body.password1) {
      Account.findOne({
        email: req.body.email
      }, function (err, account) {
        if (err) {
          res.send('error while checking if the account already exists: ' + err);
        }
        else {
          if (account) {
            res.status(409).send('Conflict: account already exists.');
          }
          else {
            console.log('account creation: ', req.body);
            var u = new Account();
            u.email = req.body.email;
            // hash and salt password
            let passwordData = passwordHelper.saltHashPassword(req.body.password1);
            u.hash = passwordData.passwordHash;
            u.salt = passwordData.salt;
            u.save(function (err) {
              responseHelper.sendBackErrorOrResult(err, 'Account successfully created', res);
            });
          }
        }
      });
    } else {
        res.status(400).send('login and/or password missing');
    }
  })

  // [GET]
  // Find all the accounts, or find one account filtered by email
  .get(function (req, res) {
    if (req.query.email) {
      Account.findOne({
        email: req.query.email
      }, function (err, account) {
        responseHelper.sendBackErrorOrResult(err, account, res);
      });
    } else {
      Account.find(function (err, accounts) {
        responseHelper.sendBackErrorOrResult(err, accounts, res);
      });
    }
  });

/**
 *
 *  api/accounts/:account_id
 *
 */
accountRouter.route('/:account_id')
  // [GET]
  // Find one account through is id
  .get(function (req, res) {
    Account.findById(req.params.account_id, function (err, account) {
      responseHelper.sendBackErrorOrResult(err, account, res);
    });
  })

  // [DELETE]
  // Delete one account through his id
  // TODO protect access to this method
  .delete(function (req, res) {
    Account.remove({
      _id: req.params.account_id
    }, function (err) {
      responseHelper.sendBackErrorOrResult(err, 'Account successfully deleted', res);
    });
  });


// export du router
module.exports = accountRouter;
