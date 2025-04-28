import { User } from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
};

export const getUser = async (req, res, next) => {
  res.status(500).json({
    status: "fail",
    message: "Route not implemented yet!",
  });
};

export const createUser = async (req, res, next) => {
  res.status(500).json({
    status: "fail",
    message: "Route not implemented yet!",
  });
};
export const updateUser = async (req, res, next) => {
  res.status(500).json({
    status: "fail",

    message: "Route not implemented yet!",
  });
};
export const deleteUser = async (req, res, next) => {
  res.status(500).json({
    status: "fail",
    message: "Route not implemented yet!",
  });
};
