const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  approveBooking,
  rejectBooking,
  deleteBooking,
} = require("../Controllers/BookingController");

router.post(
  "/create",
  createBooking
);

router.post(
  "/",
  createBooking
);

router.get(
  "/",
  getBookings
);

router.put(
  "/approve/:id",
  approveBooking
);

router.put(
  "/reject/:id",
  rejectBooking
);

router.delete(
  "/:id",
  deleteBooking
);

module.exports = router;