import mongoose from "mongoose";

export const connectDB = async function () {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error: ", error.message);
  }
};
