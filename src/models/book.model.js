import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "The book title can not be empty"],
  },
  author: {
    type: String,
    required: [true, "The book author can not be empty"],
  },
  pages: {
    type: Number,
    required: [true, "The book pages can not be empty"],
  },
  description: {
    type: String,
    required: [true, "The book description can not be empty"],
  },
  publishedDate: {
    type: Date,
    required: [true, "The book publish date can not be empty"],
  },
});

export const Book = mongoose.model("Book", bookSchema);
