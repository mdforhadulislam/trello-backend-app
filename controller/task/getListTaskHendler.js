const Task = require("../../models/Task");

const getListTaskHendler = async(req, res) => {
  try {
    const { li } = req.query;
    const findListedTask = await Task.find({listId: li});
    if (findListedTask) {
      res.status(500).json(findListedTask);
    } else {
      res.status(404).json([]);
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = getListTaskHendler;
