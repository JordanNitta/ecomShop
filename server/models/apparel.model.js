const mongoose = require("mongoose")

const ApparelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    size: {
        type: [String],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
})

const Apparel = mongoose.model('apparel', ApparelSchema)
module.exports = Apparel