const Booking = require("../models/booking.model");
const User = require("../models/user.model");


const addBooking = async (req, res) => {
  const id = req.user.id;
  console.log("addBooking...");
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
    console.log("error in addBoking api", error);
    res.status(500).send("Server addBooking Error");
  }
};
const getBooking = async (req, res) => {
const id = req.user.id;
  try {
    console.log('work----')

    const bookingDetails = await Booking.find({user:id}).populate('user', 'name email phoneNumber')

    
  //   const transformData = await Promise.all (bookingDetails.map(async(item) => {
  //     const thisUser = await User.findOne({_id:item.user})
  //     console.log('thisUser',thisUser)
  //     return {
  //  ...item,
  //     clientInfo:{
  //       name: thisUser.name,
  //       email: thisUser.email,
  //       phoneNumber: thisUser.phoneNumber,
  //     }
  //     }
  //   }
  //   ))
    
    console.log('bookingDetails',bookingDetails)
    res.json(bookingDetails)
  } catch (error) {
    console.log("error in getBooking api", error);
    res.status(500).send("Server addBooking Error");
  }
};

const getOrderById = async (req, res) => {
  const {orderId} = req.params
  console.log('orderID from params is', orderId)
  try {
    const bookingDetails = await Booking.findOne({_id:orderId})
    console.log('this bookingDetails', bookingDetails)
    res.json(bookingDetails);
    
  } catch (error) {
    console.log("error in getOrderById api", error);
    res.status(500).send("Server getOrderById Error");
  }
}

module.exports = {
  addBooking,
  getBooking,
  getOrderById
};
