'use strict'
const express = require('express');
const router = express.Router();
const AlumnosController = require('./controllers/alumnoscontrollers');
let AuthController = require('./auth');


router.get('/alumnos', AlumnosController.getAlumnos);
router.get('/alumnos/:id', AlumnosController.getAlumno);
router.post('/alumnos', AlumnosController.saveAlumno);
router.put('/alumnos/:id', AlumnosController.updateAlumno);
router.delete('/alumnos/:id', AlumnosController.deleteAlumno);

router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

module.exports = router;