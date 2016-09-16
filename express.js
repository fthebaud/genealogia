'use strict';

let express = require('express');
let app = express();

app.listen(8000);

app.use('/', express.static(__dirname + '/'));

app.post('/someUrl', function (req, res) {
  console.log('rekt');
  res.send('Got a POST request');
});
