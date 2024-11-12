const mongoose = require('mongoose');

const tutoriaSchema = new mongoose.Schema({
    estudiante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estudiante', // Referencia al modelo Estudiante
        required: true,
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tutor', // Referencia al modelo Tutor
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    tema: {
        type: String,
        required: true,
    },
    // Agrega más campos según sea necesario
}, {
    timestamps: true, // Agrega createdAt y updatedAt
});

const Tutoria = mongoose.model('Tutoria', tutoriaSchema);
module.exports = Tutoria;