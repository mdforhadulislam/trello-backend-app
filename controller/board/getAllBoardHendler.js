const { findAllBoard } = require("../../db/config/boardCRUD");
const { findByTokenToGetId } = require("../../db/config/tokenCRUD");
const { findById } = require("../../db/config/userCRUD");
const Board = require("../../models/Board");
const Token = require("../../models/Token");
const User = require("../../models/User");

const getAllBoardHendler = async (req, res) => {
  try {
    const { headers } = req;
    const token = headers.authorization;
    const tokenToGetUserId = await Token.findOne({token})
    if (tokenToGetUserId) {
      const user = await User.findOne({_id:tokenToGetUserId.id});
      if (user) {
        const allUserBoards = user.boards.map(async (boardId) => {
          const board = await Board.find({ _id: boardId });
          return board;
        })
        console.log(allUserBoards);

        res.status(200).json(allUserBoards);
      } else {
        res.status(401).json({ message: "you are not allow" });
      }
    } else {
      res.status(401).json({ message: "you are not allow" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = getAllBoardHendler;
