const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/auth.controller");
const { validateRegister } = require("../middleware/user.middleware");
const { authMiddleware } = require("../middleware/auth.middleware");

router.post("/register", [validateRegister], register);
router.post("/login", login);
router.post("/logout", logout);
module.exports = router;
