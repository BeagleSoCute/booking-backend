const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
  dateTime: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  user: {
    type: ObjectId,
    ref: "user",
  },
  adultAmount: {
    type: Number,
    required: true,
  },
  babyAmount:{
    type: Number,
  },
  specification: {
    type: String,

  },
  order: {
    foodLists: [
      {
        food: {
          type: ObjectId,
          ref: "food",
        },
        amount: {
          type: Number,
        },
        specification: {
          type: String,
        },
      },
    ],
    drinkLists: [
      {
        drink: {
          type: ObjectId,
          ref: "drink",
        },
        amount: {
          type: Number,
        },
        specification: {
          type: String,
        },
      },
    ],
  },
});

module.exports = Booking = mongoose.model("booking", bookingSchema);
