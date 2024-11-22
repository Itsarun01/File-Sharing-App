import mongoose from "mongoose";

const dbConnection = async () => {
  const DB_URL =
    "mongodb+srv://user01:1234@file-sharing-app.t5vq0.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing-app";
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
