const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./api');
const welcomeRoutes = require('./controllers/welcome');

const app = express();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', welcomeRoutes);
app.use('/api', apiRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        mensaje: 'Error interno del servidor'
    });
});

module.exports = app;