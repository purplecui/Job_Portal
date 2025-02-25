import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  const { firstName, email, password } = req.body;
  if (!firstName) {
    next("First name is required");
  }
  if (!email) {
    next("Email is required");
  }
  if (!password) {
    next("Password is required");
  }
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    next("User already exists, please log in using alternative email");
  }
  const user = await userModel.create({ firstName, email, password });

  //token
  const token = user.createJWT();
  res.status(201).send({
    success: true,
    message: "User created successfully",
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
  });
};

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next("Please provide all feeds!");
  }

  //find user by email
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    next("Invalid Username or Password");
  }

  //compare Password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid UserName or Password");
  }

  user.password = undefined;
  const token = user.createJWT();
  res.status(200).json({
    success: true,
    message: "Login successful",
    user,
    token,
  });
};
