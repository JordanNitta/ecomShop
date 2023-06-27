const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
            minLength: [3, 'First name must be at least 3 characters long'],
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
            minLength: [3, 'Last name must be at least 3 characters long'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: 'Please enter a valid email'
            }
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minLength: [8, 'Password must be longer than 8 characters']
        },
    },
    { timestamps: true }
);
// set confirmPassword as a virtual field so it doesn't get stored in database
UserSchema.virtual('confirmPassword')
    .get(function(){
        return this._confirmPassword
    })
    .set(function(value){
        this._confirmPassword = value
        
    })

// Pre means before we store the user to database itallows us to perfrom logic
// Before the validation take place
// Next represent the next step to do 
// If you write it as arrow function it will take out the keyword this
UserSchema.pre("validate", function(next) {
    if (this.password !== this.confirmPassword) {
        // This will make it not valid if it doesnt match
        this.invalidate("confirmPassword", "Password must match confirm password");
    }
    // If is passes then it will move onto the next step
    next();
});

// Before saving the user to the database run this function
// Get the password they are currently getting from the form and set the password to the hash version
UserSchema.pre('save', async function(next) {
    try {
        // This refer to the current document or instance
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        console.log(error, 'Failed to hash password')
        next();
    }
})

// collection name('' , schema name)
const User = mongoose.model('user', UserSchema);
module.exports = User;