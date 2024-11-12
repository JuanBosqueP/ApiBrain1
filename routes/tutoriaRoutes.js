const express = require('express');
const router = express.Router();
const Tutoria = require('../models/tutoria'); // Asegúrate de que el modelo esté definido correctamente

router.get('/', async (req, res) => {
    try {
        const tutorias = await Tutoria.find();
        res.json(tutorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const newTutoria = new Tutoria(req.body);
    try {
        await newTutoria.save();
        res.status(201).json(newTutoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedTutoria = await Tutoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTutoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Tutoria.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
