import mongoose from "mongoose";

const dbConnection = async () => {
  const DB_URL = "mongodb://localhost:27017/";
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default dbConnection;
