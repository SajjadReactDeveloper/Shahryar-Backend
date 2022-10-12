const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    video: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Videos', videoSchema)