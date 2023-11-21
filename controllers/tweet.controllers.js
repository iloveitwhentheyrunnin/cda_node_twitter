
const { create, findAll, deleteById } = require("../database/queries/tweet.queries")


exports.showForm = (req,res)=>{
    res.render('tweet/tweet-form.twig')
}

exports.showTweet = async (req, res)=>{
    const tweets = await findAll()
    res.render('tweet/tweet-list.twig', {tweets})
}

exports.createNewTweet = async (req, res)=>{
    try{
        const body = req.body;
        await create(body)
        console.log("creation ok")
        res.redirect('/')
    } catch(error){
        console.log(error)
        const errors = Object.keys(error.errors).map(key=>error.errors[key].message)
        res.status(400).render('tweet/tweet-form',{errors})
    }
}

exports.deleteTweet = async (req, res, next)=>{
    try{
        const tweetId = req.params.tweetId;
        await deleteById(tweetId);
        res.end()
    } catch(error){
        next(error)
    }

}