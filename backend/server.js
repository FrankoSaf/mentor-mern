const express = require('express');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoute');
const profileRoute = require('./routes/profileRoute');
const session = require('express-session');

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
app.use('/auth', authRoute);
app.use('/profile', profileRoute);

mongoose.connect(process.env.DB_LINK, () => {
  app.listen(process.env.PORT, () => {
    console.log('Connected to server and database');
  });
});
