const User = require("../Modals/UserModals");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


// SIGNUP

const signupUser = async (req, res) => {
  try {
    const { fullname, email, password } =
      req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Signup Successful",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// LOGIN

const loginUser = async (req, res) => {
  try {
    const { email, password } =
      req.body;

    const user =
      await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  signupUser,
  loginUser,
};