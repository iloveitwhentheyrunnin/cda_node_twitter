const router = require('express').Router()
const { auth } = require('../controllers/authentication.controller')
const { showTweet } = require('../controllers/tweet.controllers')
const tweetRoute = require('./tweet')

router.use('/tweet', tweetRoute)

router.get('/', showTweet)

router.get('/login', auth )

module.exports = router