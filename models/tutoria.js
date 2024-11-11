const mongoose = require('mongoose');

const tutoriaSchema = new mongoose.Schema({
    Materia: { type: String, required: true },
    estudiante: { type: String, required: true },
    tutor: { type: String, required: true },
});

module.exports = mongoose.model('Tutoria', tutoriaSchema);