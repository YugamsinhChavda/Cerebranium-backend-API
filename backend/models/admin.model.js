const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
            unique: true,
        },
        emailID: {
            type: String,
            required: true,
        },
        mobileNumber: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    }
);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;