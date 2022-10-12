const mongoose = require('mongoose');
const Paper = require('../models/paper');

exports.addFiles = async(req, res) => {
    try {
        const {university, year, pdf} = req.body;
        const newPdf = new Paper({
            university, year, pdf
        })
        newPdf.save();
        res.json("Uploaded")
    } catch (error) {
        
    }
}

exports.viewFiles = async(req, res) => {
    try {
        const data = await Paper.find();
        res.json(data);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}