const { createUser } = require("../database/queries/user.queries");


exports.signup = (req, res, next) => {
    try{
        res.render('auth/signup.twig')
    } catch (error){
        next(error)
    }
}

exports.signupForm = async (req, res, next) => {
    const body = req.body;
    try{
        const user = await createUser(body)
        res.redirect('/');
    } catch (error){
        res.render('auth/signup.twig', {errors: [error.message]})
    }
}

exports.signinForm = (req, res, next) => {
    try{

    } catch (error){
        next(error)
    }
}

exports.signin = (req, res, next) => {
    try{
        res.render('auth/signin.twig')
    } catch (error){
        next(error)
    }
}