const express = require('express');
const router = express.Router();
const Tutor = require('../models/tutor'); 

router.get('/', async (req, res) => {
    try {
        const tutores = await Tutor.find();
        res.status(200).json(tutores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los tutores', error: error.message });
    }
});

router.post('/', async (req, res) => {
    const newTutor = new Tutor(req.body);
    try {
        await newTutor.save();
        res.status(201).json(newTutor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedTutor = await Tutor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTutor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Tutor.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;