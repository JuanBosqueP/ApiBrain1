const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Añade campos `createdAt` y `updatedAt`
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
