const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./api');
const welcomeRoutes = require('./controllers/welcome');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', welcomeRoutes);
app.use('/api', apiRoutes); 

app.get('/', (req, res) => {
    res.send('API de alumnos funcionando correctamente');
});

module.exports = app;