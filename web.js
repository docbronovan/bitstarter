var express = require('express');
var app = express();
app.use(express.logger());

fs.readFileSync('index.html' {
  response.send(Buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
