const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        message: '¡Bienvenido a la API de Alumnos!',
        endpoints: {
            getAlumnos: 'GET /api/alumnos',
            getAlumno: 'GET /api/alumnos/:id',
            createAlumno: 'POST /api/alumnos',
            updateAlumno: 'PUT /api/alumnos/:id',
            deleteAlumno: 'DELETE /api/alumnos/:id'
        }
    });
});

module.exports = router;