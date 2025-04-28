import { Book } from "../models/book.model.js";
import { AppError } from "../utils/AppError.js";

export const checkId = async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book)
    return next(new AppError(`Book not found with id: ${req.params.id}`, 404));
};
