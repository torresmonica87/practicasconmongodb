const mongoose = require('mongoose');
const app = require('./app');
const port = 3700;

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/tu_base_de_datos')
    .then(() => {
        console.log('Conexión a la base de datos establecida con éxito');

    
        app.listen(port, () => {
            console.log(`Servidor funcionando correctamente en la URL: http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar con la base de datos:', err);
    });

    //LA CONEXION SE ESTABLECE CON EL SERVIDOR PERO DEBO INVESTIGAR COMO PUEDO LLAMAR DESDE LA TERMINAL
    //LO QUE CONTIENE BD , DEBO INVESTIGAR COMO SE QUE LA CONEXION BD ES EXITOSA