const express = require('express');
const dotenv = require('dotenv').config({ path: './.env' });
const morgan = require('morgan');
const cors = require('cors');

const feedbackRoute = require('./routes/feedbackRoutes');

const app = express();
app.use(cors());

app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/tasks', feedbackRoute);

module.exports = app;
