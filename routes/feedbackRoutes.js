const express = require('express');
const Router = express.Router();

const feedbackController = require('./../controllers/feedbackController');

Router.route('/')
  .get(feedbackController.getTasks)
  .post(feedbackController.addTask);

Router.route('/:id')
  .delete(feedbackController.deleteTask)
  .patch(feedbackController.updateTask);

module.exports = Router;
