var fs=require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

b=fs.readFileSync("index.html");

app.get('/', function(request, response) {
  response.send(b.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
