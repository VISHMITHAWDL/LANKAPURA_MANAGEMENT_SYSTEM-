import ProfileController from "../controllers/profileController.js";
import express from "express";
import { verifyToken } from "../../auth/middleware/verifyToken.js";
const router = express.Router();

router.post("/create-profile", verifyToken, ProfileController.createProfile);
router.get("/profile", verifyToken, ProfileController.getProfileByUserId);

export default router;
