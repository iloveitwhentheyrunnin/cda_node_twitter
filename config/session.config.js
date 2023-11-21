const { app } = require('../app');
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
    secret: 'cle secrete',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly:true,
        maxAge: 1000 * 60 * 60 * 24 * 14
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/twitter',
        ttl: 60 * 60 * 24 * 14
    })
}))