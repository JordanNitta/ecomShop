const Product = require('../models/product.model');

const getProducts = async (req, res) => {
    const products = await Product.find({})
    res.json(products);
}

// const filterProducts = async(req, res) => {
    
// }

const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        return res.json(product)
    } else {
        res.status(404)
        // throw new Error('Product not found')
    }
}

module.exports = { getProducts, getProductById }