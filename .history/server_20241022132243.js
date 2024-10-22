import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
connectDB()

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))