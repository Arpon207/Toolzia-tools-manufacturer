import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 5000;

//middlewares
dotenv.config();
app.use(cors());
app.use(express.json());

//connection

const connection = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};

//api

app.get("/", async (req, res) => {
  res.send("Toolzia server.");
});

app.listen(port, () => {
  connection();
});
