const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'})

require('dotenv').config();
connectDB()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const subjectRouter = require('./routes/subjects');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');

app.use('/subjects', subjectRouter);
app.use('/login', authRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});