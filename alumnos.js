'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var alumnosSchema = Schema({
    n_cuenta: Number,
    nombre: {type: String, require: true},
    edad: Number,
    genero: String  
});

module.exports = mongoose.model('alumnos', alumnosSchema);