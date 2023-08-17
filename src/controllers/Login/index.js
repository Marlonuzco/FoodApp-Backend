const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/users");

const createNewUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const { username } = newUser;
    const token = jwt.sign(
      {
        username,
      },
      process.env.TOKEN_SECRET
    );
    res.status(200).json({
      message: "New user create succefully",
      userInfo: newUser,
      token,
    });
  } catch (error) {
    console.log("Error in create new user", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        username: user.username,
      },
      process.env.TOKEN_SECRET
    );

    res
      .status(200)
      .json({ message: "Login succesfully", userInfo: user, token });
  } catch (error) {
    console.log("Error in login", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createNewUser,
  login,
};
