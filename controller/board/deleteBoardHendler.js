const Board = require("../../models/Board");

const deleteBoardHendler = async (req, res) => {
  try {
    const { id } = req.params;

    const findBoard = await Board.findOne({ _id: id });

    if (findBoard) {
      const { headers } = req;
      const token = headers.authorization;
      const tokenToGetUserId = await Token.findOne({ token });
      if (tokenToGetUserId) {
        const user = await User.findOne({ _id: tokenToGetUserId.id });
        const board = await Board.findOne({ _id: id, user: user._id });

        if (board) {
          const boardDelete = await Board.findByIdAndDelete({ _id: id });
          if (boardDelete) {
            res
              .status(500)
              .json({ message: "board deleted", board: boardDelete });
          } else {
            res.status(500).json({ message: "board not found" });
          }
        } else {
          res.status(400).json({ message: "You are not allow" });
        }
      } else {
        res.status(400).json({ message: "You are not allow" });
      }
    } else {
      res.status(404).json({ message: "board not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = deleteBoardHendler;
