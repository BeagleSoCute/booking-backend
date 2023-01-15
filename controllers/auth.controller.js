const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const config = require("config");
const expireToken = config.get("tokenExpire");
const expireRefreshToken = config.get("refreshTokenExpire");
const expireRememberRefresh = config.get("rememberRefreshTokenExpire");
const tokenSecret = config.get("jwtSecret");
const { clearCookies } = require("../services/cookie.service");
const {
  cookieHttpOnlyConfigs,
  cookieNotHttpOnlyConfigs,
} = require("../settings/cookies.setting");
const { cookiesExpired } = require("../constants/cookies");
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
      return res
        .status(400)
        .json({ error: { msg: "This email is already exist!" } });
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
  const { email, password, remember } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: { msg: "Invalid user" } });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: { msg: "Invalid password" } });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };
    const access_token = jwt.sign(payload, tokenSecret, {
      expiresIn: expireToken,
    });
    const refresh_token = jwt.sign(payload, config.get("jwtRefreshSecret"), {
      expiresIn: remember ? expireRememberRefresh : expireRefreshToken,
    });
    const isAuth = true;
    res.cookie("access_token", access_token, {
      ...cookieHttpOnlyConfigs,
      maxAge: cookiesExpired,
    });
    res.cookie("refresh_token", refresh_token, {
      ...cookieHttpOnlyConfigs,
      maxAge: cookiesExpired,
    });
    res.cookie("isAuth", isAuth, {
      ...cookieNotHttpOnlyConfigs,
      maxAge: cookiesExpired,
    });
    res.send("Cookies are set");
  } catch (err) {
    res.status(500).send("Server login is error ");
  }
};
const logout = (req, res) => {
  clearCookies(res);
  try {
    res.send("Cookies are removed");
  } catch (err) {
    res.status(500).send("Server login is error ");
  }
};
const refreshToken = (req, res) => {
  const payload = {
    user: {
      id: req.user.id,
    },
  };
  const newToken = jwt.sign(payload, tokenSecret, {
    expiresIn: expireToken,
  });
  res.cookie("access_token", newToken, {
    ...cookieHttpOnlyConfigs,
    maxAge: cookiesExpired,
  });
  res.send("New access token is set");
};

module.exports = {
  register,
  login,
  logout,
  refreshToken,
};
