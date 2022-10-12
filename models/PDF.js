const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    pdf: {
        type: String,
        trim: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('PDF', fileSchema)