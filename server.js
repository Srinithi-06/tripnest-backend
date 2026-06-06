const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB =
require("./Utils/db");

const userRoutes =
require("./Routers/UserRoutes");

const packageRoutes =
require("./Routers/PackageRoutes");

const bookingRoutes =
require("./Routers/BookingRoutes");


const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use(
  "/api/users",
  userRoutes
);

app.use(
  "/api/packages",
  packageRoutes
);

app.use(
  "/api/bookings",
  bookingRoutes
);
const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running On Port ${PORT}`
  );
});