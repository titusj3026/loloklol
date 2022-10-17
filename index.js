const express = require('express')
const bodyparser = require('body-parser')

const app = express()
var port = 8000

app.use(bodyparser.text())

app.post('/post', (request, response) => {
    response.send("Gotten POST request")
    console.log(request.body)
})

const PORT = process.env.PORT || config.httpPort;

app.listen(PORT, ...)
