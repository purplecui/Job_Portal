import { testController } from "../controllers/testController.js";
import express from "express";

const router = express.Router();

router.post("/test-jobs", testController);

export default router;
