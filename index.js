require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('¡Bienvenido al inicio!');
});

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a la base de datos en MongoDB'))
.catch((error) => console.error('Error al conectar a MongoDB:', error));

const tutoriaRoutes = require('./routes/tutorias');
app.use('/api/tutorias', tutoriaRoutes);

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
module.exports = router;