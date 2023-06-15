const { response } = require('express')
const User = require('../models/user.model')

module.exports.handleCreate = (req,res) => {
    User.create(req.body) 
        .then(response => {
            res.json(response);
            console.log(response)
        })
        .catch(error => {
            res.status(400).json(error);
            console.log(error, 'hi tehre')
        })
}
