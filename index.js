require('dotenv').config(); // Cargar las variables de entorno
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express(); // Crear la aplicación de Express
const port = process.env.PORT || 5001;

// Middleware para analizar JSON y habilitar CORS
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    console.error('Error: La variable MONGODB_URI no está definida en el archivo .env.');
    process.exit(1); // Finaliza el proceso si no se encuentra la URI de MongoDB
}

mongoose.connect(mongoUri)
    .then(() => console.log('Conectado a la base de datos en MongoDB'))
    .catch((error) => console.error('Error al conectar a MongoDB:', error));

// Importar rutas
const tutoriaRoutes = require('./routes/tutoriaRoutes');
const estudianteRoutes = require('./routes/estudianteRoutes'); // Añadido

// Registrar las rutas
app.use('/api/tutorias', tutoriaRoutes);
app.use('/api/estudiantes', estudianteRoutes); // Añadido

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
