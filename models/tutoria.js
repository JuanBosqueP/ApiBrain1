const mongoose = require('mongoose');

const tutoriaSchema = new mongoose.Schema({
    Materia: { type: String, required: true },
    Estudiante: { type: mongoose.Schema.Types.ObjectId, ref: 'Estudiante ', required: true },
    tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor', required: true },
});

module.exports = mongoose.model('Tutoria', tutoriaSchema);