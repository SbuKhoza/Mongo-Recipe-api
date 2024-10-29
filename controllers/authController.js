import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

// Generate JWT token
const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Register new user
export const registerUser = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        const user = await User.create({ username, email, password, role });
        res.status(201).json({ token: generateToken(user._id, user.role) });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Login user
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.json({ token: generateToken(user._id, user.role) });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
