const router = require('express').Router()
const { showTweet } = require('../controllers/tweet.controllers')
const tweetRoute = require('./tweet')
const userRoute = require('./user')

router.use('/tweet', tweetRoute)

router.use('/user', userRoute)

router.get('/', showTweet)


module.exports = router