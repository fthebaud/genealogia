'use strict';

class Message {
  constructor(title, detail) {
    this.title = title ? title : '';
    this.detail = detail ? detail : '';
  }
}

module.exports = Message;
