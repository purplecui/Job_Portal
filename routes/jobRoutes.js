import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {
  createJobController,
  deleteJobsController,
  getAllJobsController,
  jobStatsController,
  updateJobsController,
} from "../controller/jobsController.js";

const router = express.Router();

//routes

//create JOB
router.post("/create-job", userAuth, createJobController);

//get JOB
router.get("/get-jobs", userAuth, getAllJobsController);

//update JOB
router.patch("/update-job/:id", userAuth, updateJobsController);

//delete JOB
router.delete("/delete-job/:id", userAuth, deleteJobsController);

//jobs stack filter
router.get("/job-stats", userAuth, jobStatsController);

export default router;
