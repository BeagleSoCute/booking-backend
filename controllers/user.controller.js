const User = require("../models/user.model");

const getUserData = async (req, res) => {
  const id = req.user.id;
  try {
    const user = await User.findOne({ _id: id }, {password: 0});
    res.json(user);
  } catch (err) {
    res.status(500).send("Server getUserData is error ", err);
  }
};

module.exports = {
  getUserData,
};
