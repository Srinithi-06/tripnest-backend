const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./Utils/db");

const userRoutes = require("./Routers/UserRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("TripNest Backend Running");
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running On Port ${PORT}`
  );
});