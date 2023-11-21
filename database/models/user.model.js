const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = schema({
    content: {
        username: {type: String, required: true},
        local:{
            email: {type: String, required: true},
            password: {type: String, required: true}
        }
    }
}, {
    timestamps: true
})

const User = mongoose.model('user', userSchema);

module.exports = User;