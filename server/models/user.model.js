const mongoose = require("mongoose")

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


// collection name('' , schema name)
const User = mongoose.model('user', UserSchema);
module.exports = User;