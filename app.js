var express = require('express');
var app = express();
var session = require('express-session')

app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboard cat',
  resave: false
}));

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
