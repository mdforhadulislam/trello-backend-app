const List = require("../../models/List");

const deleteListHendler = async (req, res) => {
  try {
    const { id } = req.params;
    const findList = await List.findOne({ _id: id });
    if (findList) {
      const deleteList = List.findByIdAndDelete({ _id: findList._id });
      res.status(200).json(deleteList);
    } else {
      res.status(404).json({ message: "List not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = deleteListHendler;
