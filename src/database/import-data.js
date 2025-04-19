import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import { Book } from "../models/book.model.js";

dotenv.config({ path: "../../.env" });

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("MongoDB connected successfully"));

const books = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
console.log(books);

const importData = async () => {
  try {
    await Book.create(books);
    console.log("Data successfully loaded!");
  } catch (error) {}
};

if (process.argv[2] === "--import") importData();
