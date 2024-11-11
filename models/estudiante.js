
const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
    Id: { type: String, required: true, unique: true },
    Nombre: { type: String, required: true },
    CorreoEstudiantil: { type: String, required: true },
    Materias: [{ type: String }],
});

module.exports = mongoose.model('Estudiante', estudianteSchema);