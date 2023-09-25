const Tasks = require('./../model/feedbackModel');

exports.getTasks = async (req, res) => {
  try {
    let tasks;
    if (req.query.email) {
      const email = req.query.email;
      tasks = Tasks.find({ email });
    } else {
      tasks = Tasks.find();
    }

    const data = await tasks;
    console.log(data);

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

exports.updateTask = async (req, res) => {
  try {
    const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      task,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail',
      message: 'Could not update Task',
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Tasks.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: 'Could not delete task',
    });
    console.log(error);
  }
};

// Server Ping to avoid spin down
setInterval(async () => {
  const response = await axios.get(
    `https://taskmanager-api-52du.onrender.com/api/tasks?email=${process.env.EMAIL}`
  );
  const data = await response.data;
}, 840000);
