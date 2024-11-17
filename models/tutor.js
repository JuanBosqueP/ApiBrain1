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
    nivelEducativo: { // Campo opcional agregado
        type: String,
        required: false,
    },
}, {
    timestamps: true, 
});

const Tutor = mongoose.model('Tutor', tutorSchema);
module.exports = Tutor;

    
}, {
    timestamps: true, 
});

const Tutor = mongoose.model('Tutor', tutorSchema);
module.exports = Tutor;
