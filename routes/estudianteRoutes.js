const express = require('express');
const router = express.Router();
const Tutoria = require('../models/tutoria');

router.get('/', async (req, res) => {
    const tutoria = await Tutoria.find();
    res.json(tutoria);
});


router.post('/', async (req, res) => {
    const tutoria = new Tutoria(req.body);
    await tutoria.save();
    res.status(201).json(tutoria);
});


router.put('/:id', async (req, res) => {
    const tutoria = await Tutoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(tutoria);
});


router.delete('/:id', async (req, res) => {
    await Tutoria.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;