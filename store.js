var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var session = require('express-session');

var config = require('./config');
var twilioNotifications = require('./middleware/twilioNotifications');

app.get('/', function (req, res) {
  app.use(twilioNotifications.notifyOnError({message:"YOYOO"}, req, res));
  console.log(process.env.TWILIO_ID);
  twilioNotifications.notifyOnError();
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
