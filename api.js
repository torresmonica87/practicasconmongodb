'use strict'
const express = require('express');
const router = express.Router();
const AlumnosController = require('./controllers/alumnoscontrollers');
let AuthController = require('./controllers/auth');


router.get('/alumnos', AlumnosController.getAlumnos);
router.get('/alumnos/:id', AlumnosController.getAlumno);
router.post('/alumnos', AlumnosController.saveAlumno);
router.put('/alumnos/:id', AlumnosController.updateAlumno);
router.delete('/alumnos/:id', AlumnosController.deleteAlumno);

api.post("/login", AuthController.login);
api.post("/logout", AuthController.logout);

module.exports = router;