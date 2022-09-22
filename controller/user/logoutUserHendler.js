const {
  findByTokenToGetId,
  tokenRegisterThisId,
} = require("../../db/config/tokenCRUD");
const crud = require("../../lib/crud");
const Token = require("../../models/Token");
const User = require("../../models/User");

const logoutUserHendler = async (req, res) => {
  try {
    const { headers } = req;
    const token = headers.authorization;
    if (token) {
      const tokenCheck = await Token.findOne({token});
      if (tokenCheck) {
        const findUser = await User.findOne({_id:tokenCheck.id})
        const findAllToken = await Token.find({id:findUser._id})

        findAllToken.map(async (token)=>{
          await Token.findByIdAndDelete({_id:token._id})
        })
        
        res.status(200).json({ message: "Logout Succesfull" });
      } else {
        res.status(400).json({ message: "you are not allow" });
      }
    } else {
      res.status(400).json({ message: "Send token" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = logoutUserHendler;
