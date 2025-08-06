// models/User.js
import mongoose from 'mongoose';    

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['manager', 'employee', 'doctor'], default: 'employee' }
});

export default mongoose.model('User', userSchema);
