import { Book } from "../models/book.model.js";

export const getAllBooks = async function (req, res) {};

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

export const getBook = async function (req, res) {};

export const updateBook = async function (req, res) {};

export const deleteBook = async function (req, res) {};
