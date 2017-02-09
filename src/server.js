var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var port = 3000;

app.listen(port, function() {
  console.log('Server Active on', port);
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api', require('../routes/api.js')(express));
