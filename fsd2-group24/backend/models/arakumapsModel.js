const mongoose = require('mongoose');

const arakumapsTemplate = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lng: {
        type: String,
        required: true,
    },
    lat: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('ArakuMaps', arakumapsTemplate)