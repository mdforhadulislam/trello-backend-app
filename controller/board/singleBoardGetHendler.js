const Board = require("../../models/Board");
const Token = require("../../models/Token");
const User = require("../../models/User");

const singleBoardGetHendler = async (req, res) => {
  try {
    const { id } = req.params;

    const findBoard = await Board.findOne({_id:id});

    if (findBoard) {
      const { headers } = req;
      const token = headers.authorization;
      const tokenToGetUserId = await Token.findOne({token})
      if (tokenToGetUserId) {

        const user = await User.findOne({_id:tokenToGetUserId.id});
        const board = await Board.findOne({_id:id,user:user._id})

        if (board) {
          res.status(200).json(board);
        } else {
          res.status(500).json({ message: "You are not allow" });
        }
      } else {
        res.status(500).json({ message: "You are not allow" });
      }
    } else {
      res.status(500).json({ message: "board not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = singleBoardGetHendler;
