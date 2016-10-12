'use strict';

let Message = require('./message');

class ErrorMessage extends Message {
  constructor(title, message) {
    super(title, message);
    this.isError = true;
  }
}

module.exports = ErrorMessage;
