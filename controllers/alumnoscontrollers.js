'use strict'

var alumnos = require('../models/alumnos');

var controller = {
 alumnos: function(req, res){

    alumnos.find({}).exec ((err, alumnos) =>{
        if (err) return res.status(500).json({status: 500,mensaje: err});
        console.log (alumnos);
    });

 }
}
module.exports = controller