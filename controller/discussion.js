const mongoose = require('mongoose');
const Discussion = require('../models/Discussion');

exports.add = async(req, res) => {
    try {
        const {query} = req.body;
        console.log(query);
        const newJob = new Discussion({
            query: query
        })
        newJob.save();
        res.json("Query Added");
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

exports.view = async(req, res) => {
    try {
        const jobs = await Discussion.find();
        res.json(jobs);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

exports.updateData = async(req, res) => {
    try {
        const {response} = req.body;
        console.log(response)
        Discussion.findOneAndUpdate(
            { _id: req.params.id }, 
            { $push: { response: response  } },
            function (error, success) {
                if (error) {
                    console.log(error);
                } 
                else {
                    console.log(success);
                }
            });
            res.json("Added");
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}