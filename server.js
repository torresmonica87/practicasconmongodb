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

    // INVESTIGAR como haria para consultar solo un estudiante de la bd 