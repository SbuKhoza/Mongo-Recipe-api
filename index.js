import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/api/recipes", recipeRoutes);
app.use("/api/auth", authRoutes);

// Error handling for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong" });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
