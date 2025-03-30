
const express = require('express');
const router = express.Router();
const Alumno = require('./models/alumnos');


router.get('/alumnos', async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.status(200).json({
            status: 'success',
            data: alumnos
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});


router.get('/alumnos/:id', async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        if (!alumno) {
            return res.status(404).json({
                status: 'error',
                message: 'Alumno no encontrado'
            });
        }
        res.status(200).json({
            status: 'success',
            data: alumno
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});


router.post('/alumnos', async (req, res) => {
    try {
        const nuevoAlumno = new Alumno({
            nombre: req.body.nombre,
            edad: req.body.edad,
            género: req.body.genero
        });

        const alumnoGuardado = await nuevoAlumno.save();
        res.status(201).json({
            status: 'success',
            data: alumnoGuardado
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
});


router.put('/alumnos/:id', async (req, res) => {
    try {
        const alumnoActualizado = await Alumno.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!alumnoActualizado) {
            return res.status(404).json({
                status: 'error',
                message: 'Alumno no encontrado'
            });
        }
        
        res.status(200).json({
            status: 'success',
            data: alumnoActualizado
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
});


router.delete('/alumnos/:id', async (req, res) => {
    try {
        const alumnoEliminado = await Alumno.findByIdAndDelete(req.params.id);
        
        if (!alumnoEliminado) {
            return res.status(404).json({
                status: 'error',
                message: 'Alumno no encontrado'
            });
        }
        
        res.status(200).json({
            status: 'success',
            message: 'Alumno eliminado correctamente'
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
});

module.exports = router;