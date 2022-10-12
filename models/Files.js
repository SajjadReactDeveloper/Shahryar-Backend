const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    cv: {
        type: String,
        trim: true
    },
    fsc: {
        type: String,
        trim: true,
    },
    matric: {
        type: String,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Files', fileSchema)