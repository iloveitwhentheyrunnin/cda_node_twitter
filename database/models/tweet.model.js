const mongoose = require('mongoose')
const schema = mongoose.Schema

const tweetSchema = schema({
    content: {
        type: String, 
        maxlength: 140, 
        minlength: 1, 
        required: [true, 'Le tweet ne peut être vide']}
})

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;