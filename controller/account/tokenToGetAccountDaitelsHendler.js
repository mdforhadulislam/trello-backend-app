const Token = require("../../models/Token");
const User = require("../../models/User");

const tokenToGetAccountDaitelsHendler = async (req, res) => {
  try {
    const token = req.params;

    const findToken = await Token.findOne({ token });

    if (findToken) {
      const findUser = await User.findOne({ _id: findToken.id });
      if (findUser) {
        res.status(200).json({ message: findUser });
      } else {
        return res.status(404).json({
          message: "User not found",
        });
      }
    } else {
      return res.status(404).json({ message: "Token not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};
module.exports = tokenToGetAccountDaitelsHendler;
