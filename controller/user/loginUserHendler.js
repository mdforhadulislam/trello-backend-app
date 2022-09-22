const shortid = require("shortid");
const Token = require("../../models/Token");
const User = require("../../models/User");
const { compareHash } = require("../../utils/hash");
const stringGenarator = require("../../utils/stringGenarator")

const loginUserHendler = async (req, res) => {
  try {
    let email = req.body.email ?? false;
    let password = req.body.password ?? false;

    if (email && password) {
      const user = await User.findOne({ email });

      if (user && compareHash(password, user.password)) {
        const userAnotherToken = await Token.find({ id: user._id });

        if (userAnotherToken.length < 3) {
          const token = new Token({ id: user._id, token:stringGenarator() });
          const saveToken = await token.save();
          res
            .status(200)
            .json({ message: "Login Success", token: saveToken.token });
        } else {
          res
            .status(400)
            .json({ message: "you are alrady login another device" });
        }
      } else {
        res.status(400).json({ message: "you are not allow" });
      }
    } else {
      res.status(400).json({ message: "send valid value" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = loginUserHendler;
