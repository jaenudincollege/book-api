import { Book } from "../models/book.model.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";

const checkId = (req, res, next, id) => {
  if (!id)
    return next(new AppError(`Book not found with id: ${req.params.id}`, 404));
};

export const getAllBooks = catchAsync(async function (req, res, next) {
  const books = await Book.find();

  res.status(200).json({
    status: "success",
    results: books.length,
    data: {
      books,
    },
  });
});

export const addNewBook = catchAsync(async function (req, res, next) {
  const newBook = await Book.create(req.body);
  res.status(201).json({
    status: "success",
    createdAt: new Date().toISOString(),
    data: {
      book: newBook,
    },
  });
});

export const getBook = catchAsync(async function (req, res, next) {
  const book = await Book.findById(req.params.id);

  checkId(req, res, next, book);

  res.status(201).json({
    status: "success",
    data: {
      book,
    },
  });
});

export const updateBook = catchAsync(async function (req, res, next) {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body);

  checkId(req, res, next, book);

  res.status(201).json({
    status: "success",
    message: "Book updated successfully",
    data: {
      book,
    },
  });
});

export const deleteBook = catchAsync(async function (req, res, next) {
  const book = await Book.findByIdAndDelete(req.params.id);

  checkId(req, res, next, book);

  res.status(201).json({
    status: "success",
    message: "Book deleted successfully",
    data: {
      book,
    },
  });
});
