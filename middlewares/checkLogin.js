const { findByTokenToGetId } = require("../db/config/tokenCRUD");
const Token = require("../models/Token");

const checkLogin = async (req, res, next) => {
  try {
    const { headers } = req;
    const token = headers.authorization;

    if (token) {
      const checkToken = await Token.findOne({token});
      if (checkToken) {
        next();
      } else {
        res.status(401).json({ message: "Authentication failed" });
      }
    } else {
      res.status(400).json({ message: "Send token" });
    }
  } catch (error) {
    res.status(500).json({ message: "Authentication failed" });
  }
};

module.exports = checkLogin;
