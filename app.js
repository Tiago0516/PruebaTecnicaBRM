const express       = require('express');
const logger        = require('morgan');
const bodyParser    = require('body-parser');
// Esta será nuestra entrada de aplicación. Configuraremos nuestro servidor aquí.
const http = require('http');
// Configurar la aplicación exprés
const app = express();
// Log requests to the console.
app.use(logger('dev'));
// Analizar los datos de las solicitudes entrantes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Configure una ruta general predeterminada que envíe un mensaje de bienvenida en formato JSON
require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
     message: 'Bienvenido a la prueba de Santiago Giraldo Cuartas',
}));
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;