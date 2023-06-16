const User = require('../models/user.model');
const jwt = require("jsonwebtoken");
// The key that hashing algo uses to put the header and payload together in the signature
const JWT_SECRET  = process.env.JWT_SECRET

/**
 * The function generates a JSON Web Token (JWT) with a given ID and a secret key that expires in one
 * day.
 * @param id - The `id` parameter is the unique identifier of the user for whom the token is being
 * generated. This identifier is typically used to retrieve user information from a database or other
 * data source when the token is later validated.
 * @returns The function `generateToken` is returning a JSON Web Token (JWT) that has been signed with
 * a secret key (`JWT_SECRET`) and contains the `id` of the user. The token will expire after one day
 * (`{expiresIn: '1d'}`).
 */

const generateToken = (id) => {
    // sign the jwt signature at the end 
    return jwt.sign({id}, JWT_SECRET, {expiresIn: '1d'})
}

const registerUser = async(req, res) => {
    try {
        const user = await User.create(req.body)
        const token = generateToken(user._id)
        res.status(201).json({
            token,
            firstName: user.firstName
        })
    } catch (error) {
        console.log(error, 'Error happened')
        res.status(400).json(error)
    }
}

module.exports = { registerUser }
