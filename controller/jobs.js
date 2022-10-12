const mongoose = require('mongoose');
const Job = require('../models/Job');

exports.add = async(req, res) => {
    try {
        const {companyName, title, description, location, experience} = req.body;
        const newJob = new Job({
            companyName, title, description, location, experience
        })
        newJob.save();
        return res.json("Job Added");
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

exports.view = async(req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

exports.searchByLocation = async(req, res) => {
    try {
        const {location} = req.body;
        console.log(location)
        const jobs = await Job.find({$or: [{location: location}, {companyName: location}]});
        res.json(jobs)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

exports.searchByDate = async(req, res) => {
    try {
        const jobs = await Job.find().sort({createdAt: 1});
        res.json(jobs)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

exports.searchByCompanyName = async(req, res) => {
    try {
        const {companyName} = req.body;
        const jobs = await Job.find({companyName: companyName});
        res.json(jobs)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}