const express = require('express');
const app = express();
const estudianteRoutes = require('./estudianteRoutes'); // Cambiar a estudianteRoutes
const tutorRoutes = require('./tutorRoutes'); // Cambiar a tutorRoutes
const tutoriaRoutes = require('./tutoriaRoutes'); // Asegúrate de incluir tutoriaRoutes si es necesario

app.use(express.json());
app.use('/api/estudiantes', estudianteRoutes); // Rutas para estudiantes
app.use('/api/tutores', tutorRoutes); // Rutas para tutores
app.use('/api/tutorias', tutoriaRoutes); // Rutas para tutorías

app.listen(5000, () => {
  console.log('Servidor iniciado en el puerto 5000'); // Cambiar a 5000
});