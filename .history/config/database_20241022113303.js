import mongoose from "mongoose";

const connectDB = async () => {
    try {
       const connection = await mongoose (process.env.MONGO_URI)
        
    }

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.error(err));