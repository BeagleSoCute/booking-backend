const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth.middleware");
const {
  addBooking,
  getBooking,
  getBookingById,
  updateOrderBookingById,
  updateBookingById,
  deleteBookingById,
} = require("../controllers/booking.controller");

router.post("/add", [authMiddleware], addBooking);
router.get("/get", [authMiddleware], getBooking);
router.get("/getById/:bookingId", [authMiddleware], getBookingById);
router.put("/updateOrder", [authMiddleware], updateOrderBookingById);
router.put("/updateBooking", [authMiddleware], updateBookingById);
router.delete("/delete/:bookingId", [authMiddleware], deleteBookingById);

module.exports = router;
