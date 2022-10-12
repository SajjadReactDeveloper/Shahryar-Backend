const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    query: {
        type: String,
        trim: true
    },
    response: {
        type: [String]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Discussion', fileSchema)