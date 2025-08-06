import express from 'express';
import AuthController from '../controllers/auth_controller.js';
import {verifyToken} from '../middleware/verifyToken.js';
const router = express.Router();

// Public routes
router.post('/login', AuthController.login);


// Protected routes
router.post('/change-password', verifyToken, AuthController.changePassword);
router.post('/register', verifyToken, AuthController.registerByAdmin);



export default router;