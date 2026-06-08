const express = require("express");
const {
  signupUser,
  loginUser,
  getUsers,
  deleteUser,
  resetPassword,
} = require("../Controllers/UserController");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.put("/reset-password", resetPassword);

module.exports = router;
