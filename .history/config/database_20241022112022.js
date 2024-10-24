import mongoose from "mongoose";

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
      console.log("MongoDB Connected...");
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
};

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.error(err));