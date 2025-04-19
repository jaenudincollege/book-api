import { Book } from "../models/book.model.js";

export const getAllBooks = async function (req, res) {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: "success",
      results: books.length,
      data: {
        books,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const addNewBook = async function (req, res) {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({
      status: "success",
      createdAt: new Date().toISOString(),
      data: {
        book: newBook,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const getBook = async function (req, res) {
  try {
    const book = await Book.findById(req.params.id);
    res.status(201).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const updateBook = async function (req, res) {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({
      status: "success",
      message: "Book updated successfully",
      data: {
        book,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const deleteBook = async function (req, res) {};
