const { convartHash } = require("../../utils/hash");
const User = require("../../models/User");

const registerUserHendler = async (req, res) => {
  try {
    const name = req.body.name ?? false;
    const email = req.body.email ?? false;
    const username = req.body.username ?? false;
    const password = convartHash(req.body.password) ?? false;

    if (name && username && email && password) {
      const checkEmail = await User.findOne({ email });
      const checkUsername = await User.findOne({ username });

      if (checkEmail && checkUsername) {
        return res
          .status(400)
          .json({ message: "email and username alrady used" });
      }
      if (checkEmail) {
        return res.status(400).json({ message: "email alrady used" });
      }
      if (checkUsername) {
        return res.status(400).json({ message: "username alrady used" });
      }

      const user = new User({
        name,
        username,
        email,
        password,
      });

      const newUser = await user.save();

      res.status(200).json({ message: "registration Successfull" });
    } else {
      res.status(400).json({ message: "send valid value" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = registerUserHendler;
