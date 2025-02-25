//packages import
import dotenv from "dotenv";
import express from "express";

//files import
import connectionDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

//dotenv config
dotenv.config();

//database
connectionDB();

//rest object
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/job", jobRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening in ${process.env.DEV_MODE} in port ${PORT}`);
});
