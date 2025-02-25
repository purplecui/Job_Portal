import mongoose from "mongoose";
const { Schema } = mongoose;

const jobSchema = new Schema(
  {
    company: {
      type: String,
      required: [true, "company name required"],
    },
    position: {
      type: String,
      required: [true, "position must be filled"],
    },
    status: {
      type: String,
      enum: ["pending", "reject", "interview"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("JOB", jobSchema);
