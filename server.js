var express = require('express');
var app = express();
var mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.DB || 'mongodb://localhost/esportz_app');

process.on('exit', function() { mongoose.disconnect() }); // Shutdown Mongoose correctly

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  }
  else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log("Yo server is running on  " + PORT);
});
