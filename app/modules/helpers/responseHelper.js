'use strict';

function sendBackErrorOrResult(err, objects, response) {
  if (err) {
    response.status(500).send(err);
    return;
  }
  if (objects) {
    response.send(objects);
    return;
  }
  response.status(404).send();
}

module.exports = {
  sendBackErrorOrResult
};
