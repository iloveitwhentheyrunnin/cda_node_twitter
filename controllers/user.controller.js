exports.signupForm = (req, res, next) => {
    try{

    } catch (error){
        next(error)
    }
}

exports.signup = (req, res, next) => {
    try{
        res.render('auth/signup.twig')
    } catch (error){
        next(error)
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