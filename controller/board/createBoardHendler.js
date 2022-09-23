const Board = require("../../models/Board");
const Token = require("../../models/Token");
const User = require("../../models/User");

const createBoardHendler = async (req, res) => {
  try {
    let { name, color } = req.body;
    name = name.length > 0 ? name : false;

    if (name) {
      const { headers } = req;
      const token = headers.authorization;

      const tokenToGetUserId = await Token.findOne({token})
      if (tokenToGetUserId) {
        const user = await User.findOne({_id:tokenToGetUserId.id});

        if (user) {
          const newBoard = new Board({name,color,user:[user._id]})

          user.boards=[...user.boards,newBoard._id]
          await user.save()
          
          const board = await newBoard.save()

          res.status(200).json(board);
        } else {
          res.status(401).json({ message: "you are not allow" });
        }
      } else {
        res.status(401).json({ message: "you are not allow" });
      }
    } else {
      res.status(400).json({ message: "send valid value" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = createBoardHendler;
