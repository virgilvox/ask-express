var express = require('express')
var app = express()

var port = process.env.PORT || 80 ;

app.post('/', function (req, res) {
  var reply = {
      "version": "1.0",
      "response": {
        "outputSpeech": {
          "type": "PlainText"
          "text": "Success"
        },
        "shouldEndSession": true
      }
    }
  res.status(200).send(reply);
})

app.listen(port)
