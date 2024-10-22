import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
conne


  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))