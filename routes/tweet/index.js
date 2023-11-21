const {createNewTweet, showForm, deleteTweet} = require('../../controllers/tweet.controllers')
const router = require('express').Router()

router.get('/new', showForm)

router.post('/new', createNewTweet)
router.delete('/:tweetId', deleteTweet)

module.exports = router;