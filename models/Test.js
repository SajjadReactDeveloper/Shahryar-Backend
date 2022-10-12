const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    university: {
        type: String,
        trim: true,
        required: true,
    },
    question: {
        type: String,
        required: true,
        trim: true
    },
    A: {
        type: String,
        required: true,
        trim: true,
    },
    B: {
        type: String,
        required: true,
    },
    C: {
        type: String,
        required: true,
    },
    D: {
        type: String,
        required: true,
    },
    correctOption: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Test', testSchema)