
const estudiante = require('../models/estudiante');
const  estudiante = require('../models/estudiante');
const { v4: uuidv4 } = require('uuid'); 


exports.getEstudiante = async (req, res) => {
    try {
        const estudiante = await estudiante.find();
        res.json(estudiante);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createEstudiante = async (req, res) => {
    const newEstudiante = new estudiante({
        id: uuidv4(), 
        ...req.body 
    });
    try {
        await newEstudiante.save();
        res.status(201).json(newEstudiante);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.updateEstudiante = async (req, res) => {
    try {
        const updatedEstudiante = await estudiante.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedEstudiante);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteEstudiante = async (req, res) => {
    try {
        await estudiante.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};