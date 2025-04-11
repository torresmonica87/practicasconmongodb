'use strict'

const mongoose = require('mongoose');
const Alumnos = require('./controllers/alumnos');

// Configuración para la conexión a MongoDB
mongoose.set('strictQuery', false);

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/tu_base_de_datos')
    .then(() => {
        console.log('Conexión a la base de datos establecida con éxito');
        // Llamar a la función para agregar un nuevo alumno
        agregarNuevoAlumno();
    })
    .catch(err => {
        console.error('Error al conectar con la base de datos:', err);
    });

// Función para agregar un nuevo alumno
function agregarNuevoAlumno() {
    // Crear un nuevo objeto alumno con los datos que quieres guardar
    const nuevoAlumno = new Alumnos({
        n_cuenta: 5, 
        nombre: "Lucas Quiñonez", 
        edad: 25, 
        genero: "M" 
    });

    // Guardar el alumno en la base de datos
    nuevoAlumno.save()
        .then(alumnoGuardado => {
            console.log('Alumno guardado correctamente:');
            console.log(alumnoGuardado);
            // Cerrar la conexión a la base de datos después de guardar
            mongoose.connection.close();
        })
        .catch(error => {
            console.error('Error al guardar el alumno:', error);
            // Cerrar la conexión en caso de error
            mongoose.connection.close();
        });
}

// Si quieres que el script acepte datos por línea de comandos, puedes usar process.argv
// Por ejemplo: node alumnosnuevo.js 6 "Juan Pérez" 22 M
if (process.argv.length >= 6) {
    // Los argumentos comienzan en el índice 2
    const n_cuenta = parseInt(process.argv[2]);
    const nombre = process.argv[3];
    const edad = parseInt(process.argv[4]);
    const genero = process.argv[5];

    // Crear un nuevo objeto alumno con los datos proporcionados
    const alumnoDesdeArgs = new Alumnos({
        n_cuenta: n_cuenta,
        nombre: nombre,
        edad: edad,
        genero: genero
    });

    // Guardar el alumno en la base de datos
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