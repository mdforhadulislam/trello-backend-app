const { findByUsername } = require("../../db/config/userCRUD");
const User = require("../../models/User");

const accountDeleteHendler = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOneAndDelete({username});
    if (user) {
      res.status(200).json({ message: "account successfuly delete" });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = accountDeleteHendler;
