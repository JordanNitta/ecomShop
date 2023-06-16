const  { getProducts } = require('../controllers/products.controller');

module.exports = app => {
    app.get('/api/all/products', getProducts)
}