const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const routing = require('./routes')
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const {
  APP_HOSTNAME,
  APP_PORT,
  NODE_ENV,
  APP_SECRET,
  MONGO_STRING,
  MONGO_DB_NAME
} = process.env;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'twig');

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
        console.log(`App listening at http://${APP_HOSTNAME}:${APP_PORT}`);
    });
}
catch (err) {
    console.error('Erreur de connexion', err.message)
}

