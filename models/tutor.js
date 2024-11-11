
const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
    Nombre: { type: String, required: true },
    Asignatura: { type: String, required: true },
    Experiencia: { type: Number, required: true },
});

module.exports = mongoose.model('Tutor', tutorSchema);