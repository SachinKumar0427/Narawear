const User = require("./../Models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

exports.signupHandler = async (req, res) => {
  try {
    let { name, email, password, phone } = req.body;
    password = await bcrypt.hash(password, 12);
    const createUser = await User.create({ name, email, password, phone });
    res.status(200).json(createUser);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

exports.loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });
    if (!userFound) throw new Error("invalid credentials!");
    const correctPass = await bcrypt.compare(password, userFound.password);
    if (!correctPass) throw new Error("Invalid credentials");

    const token = await jwt.sign(
      { userId: userFound._id },
      process.env.SECRET_KEY,
      { expiresIn: "90d" }
    );
    res.cookie("jwt", token, { maxAge: Date.now() + 1000 * 60 * 60 * 24 * 90 });
    res.status(200).json({ message: token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

exports.protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const payload = await jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(payload.userId);
    console.log(user)
    if (!user) throw new Error("User not found!");
    // log out too

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized!" });
  }
};
