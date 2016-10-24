'use strict';

let crypto = require('crypto');

/**
 * generates random string of characters i.e salt
 * @param  {number} length The length of the random string
 * @return {string}        random string
 */
function genRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') /** convert to hexadecimal format */
    .slice(0, length); /** return required number of characters */
}

/**
 * hash password with sha512
 * @param  {string} password password to hash
 * @param  {string} salt     word used for salting
 * @return {string}          salted password
 */
function sha512(password, salt) {
  var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  var value = hash.digest('hex');
  return {
    salt: salt,
    passwordHash: value
  };
}

/**
 * return the "salted" hash of a password
 * @param  {[type]} accountPassword password
 * @return {[type]}              "salted" hash of the password
 */
function saltHashPassword(accountPassword) {
  var salt = genRandomString(16);
  return sha512(accountPassword, salt);
}

exports.saltHashPassword = saltHashPassword;
