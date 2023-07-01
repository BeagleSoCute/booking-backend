const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth.middleware");
const {addBooking, getBooking,getBookingById} =  require("../controllers/booking.controller");

router.post("/add", [authMiddleware], addBooking);
router.get("/get", [authMiddleware], getBooking);
router.get("/getById/:bookingId", [authMiddleware], getBookingById);

module.exports = router;

