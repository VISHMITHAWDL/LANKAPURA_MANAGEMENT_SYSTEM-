import ProfileController from "../controllers/employeeProfileController.js";
import express from "express";
import { verifyToken } from "../../auth/middleware/verifyToken.js";
import upload from "../../auth/middleware/upload.js";
const router = express.Router();

// router.post("/create-profile", verifyToken, ProfileController.createProfile);
router.post("/create-profile", verifyToken, upload.single('profileImage'), ProfileController.createProfile);
router.get("/profile", verifyToken, ProfileController.getProfileByUserId);


export default router;