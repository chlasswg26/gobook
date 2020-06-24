const express = require('express')
const Route = express.Router()
const cors = require('cors')
const corsOption = {
    origin: '*',
    optionSuccessStatus: 200
}
const useCors = cors(corsOption)

// const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')

Route
    // .use('/user', useCors, userRoutes)
    .use('/auth', authRoutes)

module.exports = Route