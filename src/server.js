var express = require('express');

var app = express();

var body_parser = require('body-parser');

var port = 3000;

app.use('/api', require('./routes/api.js')(express));

app.listen(port, function() {
  console.log('Server Active on', port);
});
