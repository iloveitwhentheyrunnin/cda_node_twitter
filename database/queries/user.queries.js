const  User = require("../models/user.model")

exports.createUser = async (user) => {

    try {
        const hashPassord = await User.hashPassord(user.password)
        const newUser = new User({
            username: user.username,
            local: {
                email: user.email,
                password: hashPassord
            }
        })
        return newUser.save()
    } catch (error) {
        throw error
    }

}