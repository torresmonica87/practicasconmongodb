'use strict'

const mongoose = require('mongoose');
const Alumnos = require('./controllers/alumnos');


mongoose.set('strictQuery', false);


mongoose.connect('mongodb://localhost:27017/curso')
    .then(() => {
        console.log('Conexión a la base de datos establecida con éxito');
   
        agregarNuevoAlumno();
    })
    .catch(err => {
        console.error('Error al conectar con la base de datos:', err);
    });


function agregarNuevoAlumno() {
    
    const nuevoAlumno = new Alumnos({
        n_cuenta: 6, 
        nombre: "Lucas Perez", 
        edad: 25, 
        genero: "M" 
    });

 
    nuevoAlumno.save()
        .then(alumnoGuardado => {
            console.log('Alumno guardado correctamente:');
            console.log(alumnoGuardado);
        
            mongoose.connection.close();
        })
        .catch(error => {
            console.error('Error al guardar el alumno:', error);
          
            mongoose.connection.close();
        });
}


if (process.argv.length >= 6) {
    
    const n_cuenta = parseInt(process.argv[2]);
    const nombre = process.argv[3];
    const edad = parseInt(process.argv[4]);
    const genero = process.argv[5];

   
    const alumnoDesdeArgs = new Alumnos({
        n_cuenta: n_cuenta,
        nombre: nombre,
        edad: edad,
        genero: genero
    });


    alumnoDesdeArgs.save()
        .then(alumnoGuardado => {
            console.log('Alumno guardado correctamente:');
            console.log(alumnoGuardado);
            mongoose.connection.close();
        })
        .catch(error => {
            console.error('Error al guardar el alumno:', error);
            mongoose.connection.close();
        });
}

// falta: NO PERMITIR QUE HAYA INGRESO DE n_cuenta IGUALES EJ. HAY NOS ALUMNOS CON n_cuenta: 6