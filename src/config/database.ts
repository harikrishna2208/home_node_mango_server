import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mangoConnect = await mongoose.connect("mongodb://172.17.0.2/27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log(mangoConnect, "cas");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};

export default connectDB;
