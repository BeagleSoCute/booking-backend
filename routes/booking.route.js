const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth.middleware");
const {addBooking, getBooking,getOrderById} =  require("../controllers/booking.controller");

router.post("/add", [authMiddleware], addBooking);
router.get("/get", [authMiddleware], getBooking);
router.get("/getById/:orderId", [authMiddleware], getOrderById);


module.exports = router;

