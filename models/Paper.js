const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({ 
    university: {
        type: String,
        trim: true
    },
    year: {
        type: String,
        trim: true
    },
    pdf: {
        type: String,
        trim: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Paper', fileSchema)