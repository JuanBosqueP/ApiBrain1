const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
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

    // Agrega más campos según sea necesario
}, {
    timestamps: true, // Agrega createdAt y updatedAt
});

const Estudiante = mongoose.model('Estudiante', estudianteSchema);
module.exports = Estudiante;