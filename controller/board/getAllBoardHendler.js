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
        const boards = await Board.find({_id: user.boards});

        res.status(200).json(boards);
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
