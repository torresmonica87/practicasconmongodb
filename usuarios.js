'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuariosSchema = Schema({
    mail: {type: String, require: true, unique: true},
    pass: {type: String, require: true},
 
});

module.exports = mongoose.model('usuarios', usuariosSchema);