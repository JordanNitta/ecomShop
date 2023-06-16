const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

module.exports.authenticate = (req, res, next) => {
    // Uses a var name jwt 
    jwt.verify(req.cookies.usertoken, JWT_SECRET, (err, payload)=>{
        if(err){
            res.status(401).json({verified: false});
        }else{
            next();
        }
    });
}