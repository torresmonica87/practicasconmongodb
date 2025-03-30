const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).send({
        message: '¡Bienvenido a la API de Alumnos!',
        endpoints: {
            getalumnos: '/api/alumnos',
            postalumnos: '/api/alumnos'
        }
    });
});

module.exports = router;
