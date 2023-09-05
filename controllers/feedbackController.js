const Tasks = require('./../model/feedbackModel');

exports.getTasks = async (req, res) => {
  try {
    let tasks;
    if (req.query.userName) {
      tasks = Tasks.find({ userName: req.query.userName });
    } else {
      tasks = Tasks.find();
    }

    const data = await tasks;

    res.status(200).json({
      status: 'success',
      results: data.length,
      data: {
        data,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: 'Could not fetch tasks',
    });
    console.log(error);
  }
};

exports.addTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: 'Could not add new task',
    });
    console.log(error);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Tasks.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      message: 'Task Deleted',
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: 'Could not delete task',
    });
    console.log(error);
  }
};
