const express = require('express');
const router = express.Router();
const AlumnosController = require('./controllers/alumnoscontrollers');


router.get('/alumnos', AlumnosController.getAlumnos);
router.get('/alumnos/:id', AlumnosController.getAlumno);
router.post('/alumnos', AlumnosController.saveAlumno);
router.put('/alumnos/:id', AlumnosController.updateAlumno);
router.delete('/alumnos/:id', AlumnosController.deleteAlumno);

module.exports = router;