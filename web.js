var express = require('express');
var app = express();
app.use(express.logger());

if (index.html) {
       rest.get(index.html).on('complete', function(result) {
           console.log(result);
           //outputter(result, program.checks);
       });
    }

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
