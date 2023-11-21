const {createNewTweet, showForm, deleteTweet, editTweet, updateTweet} = require('../../controllers/tweet.controllers')
const router = require('express').Router()

router.get('/new', showForm)
router.post('/new', createNewTweet)

router.delete('/:tweetId', deleteTweet)

router.get('/edit/:tweetId', editTweet)
router.post('/edit/:tweetId', updateTweet)

module.exports = router;