const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth.controller");
const { validateRegister } = require("../middleware/user.middleware");
const { authMiddleware } = require("../middleware/auth.middleware");

router.post("/register", [validateRegister], register);
router.post("/login", login);

module.exports = router;
