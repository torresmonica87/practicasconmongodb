'use strict'

const {validationResult} = require ('express-validator');

var controller = {
    login: function(req, res){
const errors = validationResult (req);
if (!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
}
    let login_info = req.body;

    console.log(login_info);
   
    },
    logout: function(req, res){

    
    }
   
    };
    
 
module.exports = controller;