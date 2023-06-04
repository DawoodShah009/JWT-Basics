const { logIn, dashboard } = require('../controller/main')
const authenticationMiddleware = require('../middleware/auth')
const express = require('express')
const router = express.Router()

router.route('/dashboard').get(authenticationMiddleware, dashboard)
router.route('/login').post(logIn)

module.exports = router
