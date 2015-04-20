'use strict';
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/*', function(request, response){
  response.status(404).send('Error 404. Could not find page');
});

app.listen(process.env.PORT || 5000, function(){
  console.log('Server Running');
});
