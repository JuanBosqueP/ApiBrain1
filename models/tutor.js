const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    materia: {
        type: String,
        required: true,
    },
    // Agrega más campos según sea necesario
}, {
    timestamps: true, // Agrega createdAt y updatedAt
});

const Tutor = mongoose.model('Tutor', tutorSchema);
module.exports = Tutor;