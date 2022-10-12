const mongoose = require('mongoose');
const Video = require('../models/Video');

exports.addVideos = async(req, res) => 
{
    try {
        const {video, name} = req.body;
        const newVideo = new Video({
                video, name
            })
            newVideo.save();
        res.json("Uploaded Successfully");
        
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

exports.viewVideos = async(req, res) => {
    try {
        const data = await Video.find();
        res.json(data);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}