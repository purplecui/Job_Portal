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
app.use(helmet());
app.use(xss());
app.use(ExpressMongoSanitize());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/auth", authRoutes);

//validation middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening in ${process.env.DEV_MODE} in port ${PORT}`);
});
