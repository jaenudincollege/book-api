import dotenv from "dotenv";
dotenv.config();

const sendErrorDevelopment = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProduction = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: err,
      message: "Something went wrong!",
    });
  }
};

export const globalError = (err, req, res, next) => {
  err.status = err.status || "error";
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "development") {
    sendErrorDevelopment(err, res);
  } else if (process.env.NODE_ENV === "production") {
    sendErrorProduction(err, res);
  }

  next();
};
