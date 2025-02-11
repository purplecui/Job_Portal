//packages import
import dotenv from "dotenv";
import express from "express";

//files import
import connectionDB from "./config/db.js";

//dotenv config
dotenv.config();

//database
connectionDB();

//rest object
const app = express();

//middleware

//routes

const PORT = process.env.PORT || 6060;

app.listen(PORT, () => {
  console.log(`Listening in ${process.env.DEV_MODE} in port ${PORT}`);
});
