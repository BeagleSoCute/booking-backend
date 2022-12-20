const express = require("express");
const router = express.Router();
const { getUserData } = require("../controllers/user.controller");
const { authMiddleware } = require("../middleware/auth.middleware");

router.get("/myData", [authMiddleware], getUserData);

module.exports = router;
