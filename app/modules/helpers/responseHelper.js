'use strict';

let ErrorMessage = require('../interface/errorMessage.js');

function sendBackErrorOrResult(err, objects, response) {
  if (err) {
    response.status(500).send(new ErrorMessage('error', err));
  }
  if (objects) {
    response.send(objects);
  }
  response.status(404).send();
}

module.exports = {
  sendBackErrorOrResult
};
