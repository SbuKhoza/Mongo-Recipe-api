import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.error(err));

  app.listen(PORT, )