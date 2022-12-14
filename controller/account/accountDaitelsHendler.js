const User = require("../../models/User");

const accountDaitelsHendler = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({username});
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = accountDaitelsHendler;
