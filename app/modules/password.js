'use strict';

let crypto = require('crypto');

/**
 * generates random string of characters i.e salt
 * @param  {number} length The length of the random string
 * @return {[type]}        [description]
 */
function genRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') /** convert to hexadecimal format */
    .slice(0, length); /** return required number of characters */
}

/**
 * hash password with sha512
 * @param  {string} password [description]
 * @param  {string} salt     [description]
 * @return {[type]}          [description]
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
 * [saltHashPassword description]
 * @param  {[type]} userpassword [description]
 * @return {[type]}              [description]
 */
function saltHashPassword(userpassword) {
  var salt = genRandomString(16); /** Gives us salt of length 16 */
  return sha512(userpassword, salt);
}

exports.saltHashPassword = saltHashPassword;
