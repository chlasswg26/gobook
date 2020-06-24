const express = require('express')
const Route = express.Router()
const { authRefreshToken } = require('../middleware/auth')

const authController = require('../controllers/auth')

Route
    .post('/register', authController.createUser)
    .post('/login', authController.loginUser)
    // .post('/forgot', authController.forgotPassword)
    // .put('/reset/:code', authController.resetPassword)
    .put('/verify', authController.verifyUser)
    .post('/token', authRefreshToken, authController.refreshToken)

module.exports = Route