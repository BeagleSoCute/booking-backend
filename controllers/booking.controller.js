const Booking = require("../models/booking.model");
const User = require("../models/user.model");

const addBooking = async (req, res) => {
  const id = req.user.id;
  const { dateTime, adultAmount, babyAmount, specification } = req.body;
  try {
    const newBooking = new Booking({
      user: id,
      dateTime,
      adultAmount,
      babyAmount,
      specification,
    });
    const result = await newBooking.save();
    res.json(result);
  } catch (error) {
    res.status(500).send("Server addBooking Error");
  }
};
const getBooking = async (req, res) => {
const id = req.user.id;
  try {
    let bookingDetails
    const thisUser = await User.findOne({_id:id});
    if(thisUser.role === "admin"){
      bookingDetails = await Booking.find().populate('user', 'name email phoneNumber')   
    }else{
      bookingDetails = await Booking.find({user:id}).populate('user', 'name email phoneNumber')   
    } 
    res.json(bookingDetails)
  } catch (error) {
    console.log("error in getBooking api", error);
    res.status(500).send("Server addBooking Error");
  }
};

const getBookingById = async (req, res) => {
  const {bookingId} = req.params
  try {
    const bookingDetails = await Booking.findOne({_id:bookingId}).populate('user', 'name email phoneNumber')
    res.json(bookingDetails);
    
  } catch (error) {
    console.log("error in getOrderById api", error);
    res.status(500).send("Server getOrderById Error");
  }
}

const updateOrderBookingById = async (req, res) => {
  const {bookingId ,food, drink} = req.body
  try {
  await Booking.findOneAndUpdate({_id:bookingId}, { $set: { order:{food, drink} } })
    res.status(200).send("Update order booking successfully.");
  } catch (error) {
    console.log("error in updateOrderBookingById api", error);
    res.status(500).send("Server updateOrderBookingById Error");
  }
}

const updateBookingById = async (req, res) => {
  const {adultAmount, babyAmount, dateTime, specification, bookingId} = req.body
  try {
  await Booking.findOneAndUpdate({_id:bookingId}, { $set: { adultAmount, babyAmount, dateTime, specification } })
    res.status(200).send("Update order booking successfully.");
  } catch (error) {
    console.log("error in updateOrderBookingById api", error);
    res.status(500).send("Server updateBookingById Error");
  }
}
const deleteBookingById = async (req, res) => {
  const {bookingId} = req.params
  try {
    await Booking.findOneAndDelete({ _id: bookingId });
    res.status(200).send("Delete order booking successfully.");
  } catch (error) {
    console.log("error in deleteBookingById API", error);
    res.status(500).send("Server deleteBookingById Error");
  }
}

module.exports = {
  addBooking,
  getBooking,
  getBookingById,
  updateOrderBookingById,
  updateBookingById, 
  deleteBookingById
};
