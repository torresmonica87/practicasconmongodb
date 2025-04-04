para ver los datos contenidos en bd. no estaba el archivo mongosh en bin entonces tocó descargarlo por aparte y luego de eso hacer la siguiente configuración para poder ver el contenido de la base de datos en la terminal 

con net start MongoDB
no permitió el acceso

en la power shell ponemos 

cd "C:\Program Files\MongoDB\Server\8.0\bin"

.\mongosh.exe
 DE ESTA MANERA QUEDÓ INSTALADO mongosh


 YA QUEDÓ PARA QUE SOLO PONGA mongosh EN LA TERMINAL VS CODE Y DE AHI SHOW DBS Y DEMAS PARA CONSULTAR LA BD
 

 ahora sólo bastó colocar:
  show dbs ....muestra las bd listas
  use curso ......aqui elegimod la bd
  show collections ....muestra lo que contiene la carpeta bd elegida ej cursos contiene alumnos
  db.alumnos.find() .... esto muestra los datos contenidos en alumnos


USANDO ESTO PUEDO CITAR SOLO A UNO 
curso> db.alumnos.findOne ({n_cuenta: 3})



PARA QUE SIRVE LO QUE USAMOS EN EL CODIGO

/* 'use strict' habilita el modo estricto, que ayuda a detectar errores potenciales en el código */

       var alumnoId = req.params.id; /* Obtiene el ID del alumno desde los parámetros de la solicitud */
        var update = req.body; /* Obtiene los datos de actualización desde el cuerpo de la solicitud */
           data: alumnoUpdated /* Devuelve el alumno actualizado */
           /* Exporta el controlador para usarlo en otras partes de la aplicación */
module.exports = controller;




  /* Se proporciona un objeto con los puntos de acceso (endpoints) disponibles en la API */
        endpoints: 
            getAlumnos: 'GET /api/alumnos', /* Ruta para obtener todos los alumnos */
            getAlumno: 'GET /api/alumnos/:id', /* Ruta para obtener un alumno por su ID */
            createAlumno: 'POST /api/alumnos', /* Ruta para crear un nuevo alumno */
            updateAlumno: 'PUT /api/alumnos/:id', /* Ruta para actualizar un alumno por su ID */
            deleteAlumno: 'DELETE /api/alumnos/:id' /* Ruta para eliminar un alumno por su ID */


            ESTE ES TODO app.js

            /* Se importa el módulo express para crear el servidor web */
const express = require('express');
/* Se importa el middleware body-parser para poder procesar el cuerpo de las solicitudes */
const bodyParser = require('body-parser');
/* Se importan las rutas para la API y las rutas de bienvenida */
const apiRoutes = require('./api');
const welcomeRoutes = require('./controllers/welcome');

/* Se crea una instancia de la aplicación Express */
const app = express();

/* Middleware para habilitar CORS (Cross-Origin Resource Sharing) */
app.use((req, res, next) => {
    /* Permite solicitudes de cualquier origen */
    res.header('Access-Control-Allow-Origin', '*');
    /* Permite ciertos encabezados en las solicitudes */
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    /* Permite ciertos métodos HTTP */
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    /* Define los métodos permitidos en la respuesta */
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    /* Llama al siguiente middleware en la cadena */
    next();
});

/* Middleware para parsear las solicitudes con cuerpos URL-encoded y JSON */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Rutas principales de la aplicación: 
   - La ruta '/' maneja la bienvenida.
   - La ruta '/api' maneja las rutas de la API. */
app.use('/', welcomeRoutes);
app.use('/api', apiRoutes);

/* Middleware de manejo de errores:
   Si ocurre un error en cualquier parte de la aplicación, 
   este middleware lo captura y responde con un mensaje de error interno. */
app.use((err, req, res, next) => {
    /* Muestra el error en la consola */
    console.error(err.stack);
    /* Responde con un error 500 (Internal Server Error) */
    res.status(500).json({
        status: 'error',
        mensaje: 'Error interno del servidor'
    });
});

/* Se exporta la aplicación Express para usarla en otros archivos (como en un archivo de servidor principal) */
module.exports = app;
ESTUDIAR MAS 




// Se importa mongoose para trabajar con la base de datos MongoDB
const mongoose = require('mongoose');

// Conectar a la base de datos MongoDB en localhost, con el nombre de base de datos 'tu_base_de_datos'
mongoose.connect('mongodb://localhost:27017/tu_base_de_datos')




solucion de problemas con el express_validator por un guion y no estaba instalado ademas nos salia en el packagesjson las dependencies se instaló npm install express-validator
 y se creo el gitignore para guardar node_modules/
 que se creo de la instalcion de paquete

npm install express-validator --save
npm init -y
npm install express-validator
ls package.json
node server.js
npm list express-validator

se borró el anterio paksjson y lock porque se creo uno nuevo que tenia las dependencies instaladas con los pasos anteriores con ello se ejecuto nuevamente sin problemas..



