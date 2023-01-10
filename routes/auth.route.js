const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  refreshToken,
} = require("../controllers/auth.controller");
const { validateRegister } = require("../middleware/validators/user.validator");
const { refreshTokenMiddleware } = require("../middleware/auth.middleware");
router.post("/register", [validateRegister], register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/refresh_token", [refreshTokenMiddleware], refreshToken);

module.exports = router;
