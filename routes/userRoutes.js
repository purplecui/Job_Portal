import express from "express";
import { upadateUserController } from "../controller/userController.js";
import userAuth from "../middlewares/authMiddleware.js";

const router = express.Router();

//update user || put
router.put("/update-user", userAuth, upadateUserController);

export default router;
