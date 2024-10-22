import mongoose from "mongoose";

const connectDB = async () => {
    try {
       const connection = await mongoose.connect (process.env.MONGO_URi)
       console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error}`);

    }
    };

    export default connectDB;
    