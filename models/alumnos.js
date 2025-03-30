'use stric'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var alumnosSchema = Schema({
    nombre: {type: String, require: true},
    edad: Number,
    género: String
});

module.exports = mongoose.model('alumnos', alumnosSchema);