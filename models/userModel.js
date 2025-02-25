import mongoose, { Mongoose } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

//schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: [true, "Name is required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      require: [true, "Password is required"],
      minlenght: [6, "Password should be at least 6 characters long "],
      select: false,
    },
    location: {
      type: String,
      default: "Kathmandu",
    },
  },
  { timestamps: true }
);

//middleware
userSchema.pre("save", async function () {
  if (!this.isModified) return;
  var salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hashSync(this.password, salt);
});

//compare password
userSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

//json webtoken
userSchema.methods.createJWT = function () {
  return JWT.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export default mongoose.model("User", userSchema);
