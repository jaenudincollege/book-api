import express from "express";
import {
  addNewBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "../controllers/book.controller.js";
import { checkId } from "../middleware/checkId.js";

const route = express.Router();

route.get("/", getAllBooks);
route.post("/", addNewBook);
route.get("/:id", checkId, getBook);
route.patch("/:id", checkId, updateBook);
route.delete("/:id", checkId, deleteBook);

export default route;
