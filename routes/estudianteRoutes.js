const express = require('express');
const router = express.Router();
const Estudiante = require('../models/estudiante'); 

router.get('/', async (req, res) => {
    try {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const newEstudiante = new Estudiante(req.body);
    try {
        await newEstudiante.save();
        res.status(201).json(newEstudiante);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedEstudiante = await Estudiante.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedEstudiante);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Estudiante.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;