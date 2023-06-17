const  { getProducts, getProductById } = require('../controllers/products.controller');

module.exports = app => {
    app.get('/api/all/products', getProducts)
    app.get('/api/product/:id', getProductById)
}