const jwt = require("jsonwebtoken");
const config = require("config");

const authMiddleware = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denined" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
const refreshTokenMiddleware = async (req, res, next) => {
  const token = await req.cookies.refresh_token;
  try {
    const decoded = jwt.verify(token, config.get("jwtRefreshSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(403).json({ msg: "Refresh token is not valid" });
  }
};

module.exports = {
  authMiddleware,
  refreshTokenMiddleware,
};
