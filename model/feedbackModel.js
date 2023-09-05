const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true],
  },
  task: {
    type: String,
    required: [true],
  },
});

const Tasks = mongoose.model('Tasks', feedbackSchema);

module.exports = Tasks;
