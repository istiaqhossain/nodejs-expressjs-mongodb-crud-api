const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, 'First Name is required.'],
            trim: true,
            maxlength: [50, 'First Name must be less than 50 characters.']
        },
        last_name: {
            type: String,
            required: [true, 'Last Name is required.'],
            trim: true,
            maxlength: [50, 'Last Name must be less than 50 characters.']
        },
        email: {
            type: String,
            required: [true, 'Email is required.'],
            trim: true,
            maxlength: [100, 'Email must be less than 100 characters.'],
            unique: true,
            index: true
        },
        active: {
            type: Boolean,
            default: true
        }
    }, 
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema);