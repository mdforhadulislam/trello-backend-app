const Task = require("../../models/Task");

const createTaskHendler = async (req, res) => {
  try {
    let { task, done, list_id: list_Id } = req.body;
    task = task.length > 0 ? task : false;
    list_Id = list_Id.length > 0 ? list_Id : false;

    if (task && list_Id) {
      const findList = await List.findOne({ _id: list_Id });
      if (findList) {
        const newTask = new Task({ task, done, listId: list_Id });
        const task = newTask.save();
        res.status(200).json(task);
      } else {
        res.status(404).json({ message: "list not found" });
      }
    } else {
      res.status(400).json({ message: "send valid value" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = createTaskHendler;
