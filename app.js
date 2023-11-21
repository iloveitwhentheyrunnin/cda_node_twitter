const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const routing = require('./routes');
const dotenv = require('dotenv');

const app = express();
exports.app = app;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'twig');

require('./config/session.config');

app.use(morgan('short'))

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(routing)

try {
    mongoose.connect("mongodb://localhost:27017/twitter")
    console.log('✅ Connecté à la base MongoDB');

    // ==========
    // App start
    // ==========

    app.listen(3001, () => {
        console.log(`App listening`);
    });
}
catch (err) {
    console.error('Erreur de connexion', err.message)
}

