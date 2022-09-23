const List = require("../../models/List");

const updateListHendler = async (req, res) => {
  try {
    const { id } = req.params;
    let { name, color } = req.body;

    const findList = await List.findOne({ _id: id });

    if (findList) {
      findList.name = name ?? findList.name;
      findList.color = color ?? findList.color;

      const newList = await findListedTask.save();

      res.status(400).json(newList);
    } else {
      res.status(500).json({ message: "List Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = updateListHendler;
