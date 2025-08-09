import connectDB from '../server/src/utils/db.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './src/modules/auth/route/authRoutes.js'
import managerprofileRoutes from './src/modules/manager/routes/profileRoutes.js';
dotenv.config();
// Initialize Express app
const app = express();
// Set the port from environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/manager', managerprofileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


