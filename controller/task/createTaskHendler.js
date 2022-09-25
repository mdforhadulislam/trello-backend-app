const Task = require("../../models/Task");
const List = require("../../models/List")

const createTaskHendler = async (req, res) => {
  try {
    let { task, done, listId } = req.body;
    task = task ? task : false;
    listId = listId ? listId : false;

    console.log(task,done,listId);

    if (task && listId) {
      const findList = await List.findOne({ _id: listId });
      if (findList) {
        const newTask = new Task({ task, done, listId });
        const createdtask = await newTask.save();
        res.status(200).json(createdtask);
      } else {
        res.status(404).json({ message: "list not found" });
      }
    } else {
      res.status(400).json({ message: "send valid value" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = createTaskHendler;
