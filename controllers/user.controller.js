const User = require("../models/user.model");

const getUserData = (req, res) => {
  //NOTE req.user.id come from token
  console.log("req.user.id in getUserData function is ", req.user.id);
  try {
    const user = User.findOne({ id: req.user.id });
    res.json(user);
  } catch (err) {
    res.status(500).send("Server getUserData is error ");
  }
};

module.exports = {
  getUserData,
};
