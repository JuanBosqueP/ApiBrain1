const express = require('express');
const app = express();
const estudianteRoutes = require('./routes/estudianteRoutes'); // Cambiar a estudianteRoutes
const tutorRoutes = require('./routes/tutorRoutes'); // Cambiar a tutorRoutes
const tutoriaRoutes = require('./routes/tutoriaRoutes'); 

app.use(express.json());
app.use('/api/estudiantes', estudianteRoutes); // Rutas para estudiantes
app.use('/api/tutores', tutorRoutes); // Rutas para tutores
app.use('/api/tutorias', tutoriaRoutes); // Rutas para tutorías

app.listen(5001, () => {
  console.log('Servidor iniciado en el puerto 5001'); 
});