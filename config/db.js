import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongodb server ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Error occured: ${error}`);
  }
};

export default connectionDB;
