const Board = require("../../models/Board");
const List = require("../../models/List");

const createListHendler = async (req, res) => {
  try {
    let { name, color, boardId } = req.body;
    
    name = name ? name : false
    color = color ? color : false
    boardId = boardId ? boardId : false

    const ckeckBoard = await Board.findOne({ _id: boardId });

    if (!ckeckBoard) {
      return res.status(404).send({ message: "board not found" });
    }

    if (name && color && boardId) {
      const newList = new List({ name, color, boardId });
      const list = await newList.save();

      return res.status(200).json(list);
    } else {
      res.status(400).json({ message: "send valid data" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = createListHendler;
