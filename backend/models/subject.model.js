const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema(
    {
        subjectID: {
            type: Number,
            required: true,
            unique: true,
        },
        subjectCode: {
            type: String,
            required: true,
            unique: true,
        },
        subjectName: {
            type: String,
            required: true,
            unique: true,
        },
        professorAssigned: {
            type: String,
            required: true,
        },
        credits: {
            type: Number,
            required: true,
        },
        adminName: {
            type: String,
            required: true,
        },
    }
);

const Subject = mongoose.model("Subject", subjectSchema);
module.exports = Subject;