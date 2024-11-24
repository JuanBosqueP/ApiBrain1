require('dotenv').config(); // Cargar las variables de entorno
const express = require('express');
const bodyParser = require('body-parser'); // Aunque no se usa aquí, lo mantengo por si lo necesitas
const mongoose = require('mongoose');

const app = express(); // Crear la aplicación de Express
const port = process.env.PORT || 5001;

// Middleware para analizar JSON
app.use(express.json());

// Conexión a MongoDB
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    console.error('Error: La variable MONGODB_URI no está definida en el archivo .env.');
    process.exit(1); // Finaliza el proceso si no se encuentra la URI de MongoDB
}

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a la base de datos en MongoDB'))
    .catch((error) => console.error('Error al conectar a MongoDB:', error));

// Importar rutas
const tutoriaRoutes = require('./routes/tutoriaRoutes');

// Registrar las rutas
app.use('/api/tutorias', tutoriaRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
