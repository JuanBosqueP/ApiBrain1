const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
    Estudiante: { type: String, required: true, unique: true },
    Contraseña: { type: String, required: true },
    Rol: { type: String, enum: ['estudiante', 'tutor'], required: true }
});

module.exports = mongoose.model('Estudiante', estudianteSchema);