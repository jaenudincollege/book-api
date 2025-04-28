import express from "express";
import dotenv from "dotenv";
import bookRoute from "./src/routes/book.routes.js";
import { connectDB } from "./src/database/db.js";
dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/api/books", bookRoute);

app.all("{*splat}", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.url} in this server`,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
