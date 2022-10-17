const express = require('express')
const bodyparser = require('body-parser')

const app = express()
var port = 8000

app.use(bodyparser.text())

app.post('/post', (request, response) => {
    response.send("Gotten POST request")
    console.log(request.body)
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
