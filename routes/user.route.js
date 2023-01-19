const express = require("express");
const router = express.Router();
const {
  getUserData,
  getAllUsersData,
} = require("../controllers/user.controller");
const { authMiddleware } = require("../middleware/auth.middleware");

router.get("/myData", [authMiddleware], getUserData);
router.get("/allUsers", getAllUsersData);

module.exports = router;
