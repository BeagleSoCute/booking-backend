const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const config = require("config");

const register = async (req, res) => {
  const errors = validationResult(req); 
  const isError = !errors.isEmpty();
  if (isError) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, name, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: "This email is already exist!" });
    }
    newUser = new User({
      email,
      name,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    newUser.save();
    res.json(newUser);
  } catch (err) {
    res.status(500).send("Server register is error ");
  }
};

const login = async (req, res) => {
  const errors = validationResult(req);
  const isError = !errors.isEmpty();
  if (isError) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: { msg: "Invalid user" } });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid password" }] });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.log("error", err);
    res.status(500).send("Server login is error ");
  }
};

module.exports = {
  register,
  login,
};
