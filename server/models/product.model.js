const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    size: {
        type: [Number],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
    },

});

// collection name('' , schema name)
const Product = mongoose.model('product', ProductSchema);
module.exports = Product;