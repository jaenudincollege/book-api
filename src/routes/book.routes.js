import express from "express";
import {
  addNewBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "../controllers/book.controller.js";

const route = express.Router();

route.get("/", getAllBooks);
route.post("/", addNewBook);
route.get("/:id", getBook);
route.patch("/:id", updateBook);
route.delete("/:id", deleteBook);

export default route;
