const mongoose = require('mongoose');
const validator = require('validator');

const feedbackSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true, 'User must provide an email'],
    validate: [validator.isEmail, 'Pls provide a valid email'],
  },
  task: {
    type: String,
    required: [true],
  },
});

const Tasks = mongoose.model('Tasks', feedbackSchema);

module.exports = Tasks;
