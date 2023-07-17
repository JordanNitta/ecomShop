const User = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

// The key that hashing algo uses to put the header and payload together in the signature
const JWT_SECRET  = process.env.JWT_SECRET

const generateToken = (id) => {
    // Need to get the payload which is the id
    // Passing in the expiration
    // Verify signature
    return jwt.sign({id}, JWT_SECRET, {expiresIn: '1d'})
}

const registerUser = async(req, res) => {
    try {
        const user = await User.create(req.body)
        // Generating a token for specific user
        const token = generateToken(user._id)
        // If request is succeful 
        res.status(201).cookie( "token", token, JWT_SECRET, { httpOnly: true }).json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            // password: user.password,
            // confirmPassword: user.confirmPassword
        })
    } catch (error) {
        // console.log(error)
        res.status(400).json(error)
    }
}

const login = async(req, res) => {
    // Need to find a user from database who info match the form from the email
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email: req.body.email})

        if(!user) {
            console.log('Email incorrect')
            // Bad request 
            return res.status(400).json(error)
        }
    }
    catch{

    }
}   

const handleGetAllUsers = async (req, res) => {
    User.find()
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const handleGetLoggedUser = async (req, res) => {
    // console.log(req.cookies)
    jwt.verify(req.cookies.token, JWT_SECRET, (err, payload) => {
        if(err){
            res.status(401).json({verified: false});
        } else {
            User.findById({_id : payload.id})
            .then((user) => {
                res.json(user)
            })
        }
    });
}

module.exports = { registerUser, handleGetAllUsers, handleGetLoggedUser }
