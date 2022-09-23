const List = require("../../models/List");

const createListHendler = async (req, res) => {
  try {
    let { name, color, board_id } = req.body;

    name = name.length > 0 ? name : false;
    color = color.length > 0 ? color : false;
    board_id = board_id.length > 0 ? board_id : false;

    if (name && color && board_id) {
      const newList = new List({ name, color, boardId });
      const list = await newList.save();

      res.status(200).json(list);
    } else {
      res.status(400).json({ message: "send valid data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = createListHendler;
