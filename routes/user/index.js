const router = require('express').Router()
const { signup, signupForm, signin, signinForm } = require('../../controllers/user.controller')

router.get('/signup', signup)
router.post('/signup', signupForm)

// router.get('/signin', signin)
// router.post('/signin', signinForm)

module.exports = router;