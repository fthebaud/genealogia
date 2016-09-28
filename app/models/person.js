'use strict';

// http://mongoosejs.com/docs/api.html
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


// Schema is an object that defines the structure of any documents that will be stored in your MongoDB collection;
// it enables you to define types and validators for all of your data items.
// => a schema answers "what will the data in this collection look like?"

// Model is an object that gives you easy access to a named collection,
// allowing you to query the collection and use the Schema to validate any documents you save to that collection.
// It is created by combining a Schema, a Connection, and a collection name.
// => a model provides functionality like "Are there any records matching this query?" or "Add a new document to the collection".
