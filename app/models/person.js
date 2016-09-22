'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

 // Each schema maps to a MongoDB collection
 // and defines the shape of the documents within that collection
let personSchema = new Schema({
  id: Schema.Types.ObjectId,
  name1: String,
  name2: String,
  name3: String,
  surname: String,
  birthdate: Date,
  birthplace: String,
  deathdate: Date,
  deathplace: String
});

module.exports = mongoose.model('Person', personSchema);
