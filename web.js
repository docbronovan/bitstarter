var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var index_file = fs.readFileSync("index.html");
  response.send(index_file.toString('utf-8'));
});      

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
