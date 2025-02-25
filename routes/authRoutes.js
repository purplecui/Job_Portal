import express from "express";
import {
  registerController,
  loginController,
} from "../controller/authController.js";
import { rateLimit } from "express-rate-limit";

//app limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

//router object
const router = express.Router();

// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     User:
//  *       type: object
//  *       required:
//  *         - firstName
//  *         - lastName
//  *         - email
//  *         - password
//  *         - location
//  *       properties:
//  *         id:
//  *           type: string
//  *           description: The auto-generated id of user collection
//  *         firstName:
//  *           type: string
//  *           description: User first name
//  *         lastName:
//  *           type: string
//  *           description: User last name
//  *         email:
//  *           type: string
//  *           description: User email address
//  *         password:
//  *           type: string
//  *           description: User password should be greater than 6 characters
//  *         location:
//  *           type: string
//  *           description: User location (city or country)
//  *       example:
//  *         id: HGLKHJLK78
//  *         firstName: Polar
//  *         lastName: Beurat
//  *         email: johndoe@gmail.com
//  *         password: lkjdlksjf
//  *         location: Thimpu
//  */

// /**
//  * @swagger
//  * tags:
//  *  name: Auth
//  *  description: authentication apis
//  */

// /**
//  * @swagger
//  * /api/v1/auth/register:
//  *   post:
//  *     summary: Register a new user
//  *     tags: [Auth]
//  *     requestBody:
//  *       required: true
//  *       description: User registration details
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/User'
//  *     responses:
//  *       200:
//  *         description: User created successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/User'
//  *       500:
//  *         description: Internal server error!
//  */

//Register || post
router.post("/register", limiter, registerController);

// /**
//  * @swagger
//  * /api/v1/auth/login:
//  *  post:
//  *    summary: user log in
//  *    tags: [Auth]
//  *    requestBody:
//  *      required: true
//  *      description: User Login details
//  *      content:
//  *          application/json:
//  *            schema:
//  *               $ref: '#/components/schemas/User'
//  *    responses:
//  *      200:
//  *        description: login successfull
//  *        content:
//  *          application/json:
//  *            schema:
//  *              $ref: '#/components/schemas/User'
//  *      500:
//  *        description: something went wrong
//  *
//  */

//login || post
router.post("/login", limiter, loginController);

export default router;
