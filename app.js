const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routing = require('./routes')

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'twig');

app.use(morgan('short'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(routing)

app.listen(3001);