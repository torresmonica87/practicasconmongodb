'use strict'

var Alumnos = require('./alumnos');

var controller = {
    getAlumnos: function(req, res) {
        Alumnos.find({}).exec((err, alumnos) => {
            if (err) return res.status(500).json({status: 500, mensaje: err});
            return res.status(200).json({
                status: 'success',
                data: alumnos
            });
        });
    },
    
    getAlumno: function(req, res) {
        var alumnoId = req.params.id;
        
        Alumnos.findById(alumnoId).exec((err, alumno) => {
            if (err) return res.status(500).json({status: 'error', mensaje: err});
            if (!alumno) return res.status(404).json({status: 'error', mensaje: 'No existe el alumno'});
            
            return res.status(200).json({
                status: 'success',
                data: alumno
            });
        });
    },
    
    saveAlumno: function(req, res) {
        var alumno = new Alumnos();
        var params = req.body;
        
        alumno.n_cuenta = params.n_cuenta;
        alumno.nombre = params.nombre;
        alumno.edad = params.edad;
        alumno.genero = params.genero;
        
        alumno.save((err, alumnoStored) => {
            if (err) return res.status(500).json({status: 'error', mensaje: err});
            if (!alumnoStored) return res.status(404).json({status: 'error', mensaje: 'No se ha guardado el alumno'});
            
            return res.status(201).json({
                status: 'success',
                data: alumnoStored
            });
        });
    },
    
    updateAlumno: function(req, res) {
        var alumnoId = req.params.id;
        var update = req.body;
        
        Alumnos.findByIdAndUpdate(alumnoId, update, {new: true}, (err, alumnoUpdated) => {
            if (err) return res.status(500).json({status: 'error', mensaje: err});
            if (!alumnoUpdated) return res.status(404).json({status: 'error', mensaje: 'No existe el alumno'});
            
            return res.status(200).json({
                status: 'success',
                data: alumnoUpdated
            });
        });
    },
    
    deleteAlumno: function(req, res) {
        var alumnoId = req.params.id;
        
        Alumnos.findByIdAndRemove(alumnoId, (err, alumnoRemoved) => {
            if (err) return res.status(500).json({status: 'error', mensaje: err});
            if (!alumnoRemoved) return res.status(404).json({status: 'error', mensaje: 'No existe el alumno'});
            
            return res.status(200).json({
                status: 'success',
                mensaje: 'Alumno eliminado correctamente'
            });
        });
    }
};

module.exports = controller;