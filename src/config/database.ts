import mongoose, { ConnectOptions } from "mongoose";
import { dotenv } from "./config.js";

const connectDB = async (): Promise<void> => {
  try {
    const mangoConnect = await mongoose.connect(dotenv.mangoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};

export default connectDB;
