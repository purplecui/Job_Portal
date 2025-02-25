import express from "express";
import { createJobsController } from "../controllers/jobsController.js";

const router = express.Router();

router.post("/create-jobs", createJobsController);

export default router;
