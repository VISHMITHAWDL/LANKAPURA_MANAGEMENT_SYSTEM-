import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthService {

    async login(email, password) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User not found");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return { token, user: { id: user._id, role: user.role } };
    }

    async register(username, email, password, role = 'employee') {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("Email already in use");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, role });
        await newUser.save();
          return {
                message: "User registered by admin",
                user: {
                    id: newUser._id,
                    username: newUser.username,
                    email: newUser.email,
                    role: newUser.role
                }
            };

    }

    async changePassword(userId, oldPassword, newPassword) {

        const user = await User.findById(userId);
        if (!user) throw new Error("User not found");

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) throw new Error("Old password is incorrect");

        const hashed = await bcrypt.hash(newPassword, 10);

        user.password = hashed;
        await user.save();

        return { message: "Password updated successfully" };
    }

}

export default new AuthService();
    


