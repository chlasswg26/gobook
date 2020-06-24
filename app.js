const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routeNavigator = require('./src/index')
const dotenv = require('dotenv')
dotenv.config()

const server = app.listen(process.env.PORT, process.env.HOST, function () {
    const host = server.address().address
    const port = server.address().port

    console.log("You're connected at " + host + ":" + port)
})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/', routeNavigator)