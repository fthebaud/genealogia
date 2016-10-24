'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let accountSchema = new Schema({
  id: Schema.Types.ObjectId,
  email: String,
  hash: String,
  salt: String
});

module.exports = mongoose.model('Account', accountSchema);
