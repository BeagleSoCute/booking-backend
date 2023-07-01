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
  babyAmount: {
    type: Number,
  },
  specification: {
    type: String,
  },
  order: {
    food: [
      {
        name: {
          type: String,
          required: true,
        },
        meat: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        specification: {
          type: String,
        },
      },
    ],
    drink: [
      {
        name: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        specification: {
          type: String,
        },
      },
    ],
  },
});

module.exports = Booking = mongoose.model("booking", bookingSchema);
