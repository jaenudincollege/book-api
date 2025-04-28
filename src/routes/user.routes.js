import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";
import { login, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// prettier-ignore
router.route("/")
.get(getAllUsers)
.post(createUser);

// prettier-ignore
router.route('/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser)

export default router;
