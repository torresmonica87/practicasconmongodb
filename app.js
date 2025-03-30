
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const alumnoSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    genero: String
});

const Alumno = mongoose.model('Alumno', alumnoSchema);



app.get('/api/alumnos', (req, res) => {
    Alumno.find()
        .then(alumnos => {
            res.status(200).json(alumnos);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});


app.post('/api/alumnos', (req, res) => {
    const nuevoAlumno = new Alumno({
        nombre: req.body.nombre,
        edad: req.body.edad,
        genero: req.body.genero
    });

    nuevoAlumno.save()
        .then(alumno => {
            res.status(201).json(alumno);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});


app.get('/', (req, res) => {
    res.send('API de alumnos funcionando correctamente');
});


module.exports = app;