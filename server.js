import express from "express";
import dotenv from "dotenv";
import bookRoute from "./src/routes/book.routes.js";
import userRouter from "./src/routes/user.routes.js";
import { connectDB } from "./src/database/db.js";
import { globalError } from "./src/controllers/error.controller.js";
import { AppError } from "./src/utils/AppError.js";
dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/api/books", bookRoute);
app.use("/api/users", userRouter);

app.all("{*splat}", (req, res, next) => {
  next(new AppError(`Can't find ${req.url} in the server.`, 404));
});

app.use(globalError);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
