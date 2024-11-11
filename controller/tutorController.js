
const Tutor = require('../models/tutor');


exports.getTutor = async (req, res) => {
    try {
        const tutor = await Tutor.find();
        res.json(tutor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.createTutor = async (req, res) => {
    const newTutor = new Tutor(req.body);
    try {
        await newTutor.save();
        res.status(201).json(newTutor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.updateTutor = async (req, res) => {
    try {
        const updatedTutor = await Tutor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTutor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.deleteTutor = async (req, res) => {
    try {
        await Tutor.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};