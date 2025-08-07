import mongoose from 'mongoose';
const highProfileSchema = new mongoose.Schema({
  
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
    },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  nic: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  jobtitle:{
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['manager'],
    default: 'manager',
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  profileImage: {
    type: String,
    default: '',
  },
  qualifications: [
    {
      degree: String,
      institution: String,
      yearCompleted: Number,
    }
  ],
  skills: [
    {
      type: String,
      trim: true,
    }
  ],
  experience: [
    {
      company: String,
      position: String,
      duration: String, 
      description: String,
    }
  ],
  certifications: [
    {
      title: String,
      organization: String,
      issueDate: Date,
      expiryDate: Date,
    }
  ],
  emergencyContact: {
    name: String,
    relationship: String,
    phone: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('HighProfile', highProfileSchema);
