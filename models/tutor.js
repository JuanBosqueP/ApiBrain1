const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
    Nombre: { type: String, required: true },
    Materia: { type: String, required: true },
});

module.exports = mongoose.model('Tutor', tutorSchema);