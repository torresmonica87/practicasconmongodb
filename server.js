const mongoose = require('mongoose');
const app = require('./app');
const port = 3700;

mongoose.connect('mongodb://localhost:27017/curso')
    .then(() => {
        console.log('Conexión a la base de datos establecida con éxito');

        // Crearemos el servidor
        var server = app.listen(port, () => {
            console.log("Servidor corriendo correctamente en la URL: http://localhost:" + port);
        });
    })
    .catch(err => console.log(err));


