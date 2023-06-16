require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const products = require('./data/products');
const Product = require('./models/product.model');
const uri = process.env.MONGO_DB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => {
        console.log('Established a connection to the database');
        importProducts();
    })
    .catch(err => console.log('Something went wrong when connecting to the database', err));

const importProducts = async () => {
    try {
        // Will delete the existing records before we insert
        await Product.deleteMany();
        // Inserting Product from my products data file
        await Product.insertMany(products);
        console.log('Data seeded successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
};