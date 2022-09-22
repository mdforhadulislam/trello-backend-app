const { findByUsername, updateById } = require("../../db/config/userCRUD");
const User = require("../../models/User");
const { convartHash } = require("../../utils/hash");

const accountUpdateHendler = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({username});
    if (user) {
      user.name = req.body.name ?? user.name;
      user.username = req.body.username ?? user.username;
      user.email = req.body.email ?? user.email;
      user.password = req.body.password ?? user.password;

      await user.save();

      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = accountUpdateHendler;
