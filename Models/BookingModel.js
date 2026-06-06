const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    packageName: {
      type: String,
      required: true,
    },

    packageImage: {
      type: String,
    },

    duration: {
      type: String,
    },

    price: {
      type: String,
    },

    userName: {
      type: String,
      required: true,
    },

    userEmail: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },

    guideName: {
      type: String,
      default: "",
    },

    guidePhone: {
      type: String,
      default: "",
    },

    reason: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);