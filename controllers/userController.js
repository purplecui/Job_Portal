import userModel from "../models/userModel.js";

export const upadateUserController = async (req, res, next) => {
  try {
    const { firstName, lastName, email, location } = req.body;
    if (!firstName || !lastName || !email || !location) {
      next("please provide all fields");
    }
    const user = await userModel.findOne({ _id: req.user.userId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.location = location;

    await user.save();
    const token = user.createJWT();
    res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};
