const Task = require("../../models/Task");

const updateTaskHendler = async (req, res) => {
  try {
    const { id } = req.params;
    let { task, done } = req.body;
    const findTask = await Task.findOne({ _id: id });
    if (findTask) {
      findTask.task = task ?? findTask.task;
      findTask.done = done ?? findTask.done;
      const updatedTask = await findTask.save();
      res.status(200).json(updatedTask);
    } else {
      res.status(404).json({ message: "task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = updateTaskHendler;
