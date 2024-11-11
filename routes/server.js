const express = require('express');
const app = express();
const routes = require('./estudianteRoutes');
const routes = require('./tutorRoutes');
const controllers = require('./controller');

app.use(express.json());
app.use('/api', routes);

app.listen(5000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});