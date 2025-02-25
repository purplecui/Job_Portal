import jobsModel from "../models/jobsModel.js";
import mongoose from "mongoose";

export const createJobsController = async (req, res, next) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return console.error("company and position required");
  }
  //   req.body.createdBy = req.user.userId;
  const job = await jobsModel.create(req.body);
  res.status(200).json({ job });
};
