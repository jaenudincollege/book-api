import express from "express";
import dotenv from "dotenv";
import bookRoute from "./src/routes/book.routes.js";
import { connectDB } from "./src/database/db.js";
dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/api/books", bookRoute);

app.all("{*splat}", (req, res, next) => {
  const err = new Error(`Can't find ${req.url} in the server.`);
  err.status = "fail";
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  err.status = err.status || "error";
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
  next();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
