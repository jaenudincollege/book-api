import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name!"],
    trim: true,
    minLength: 4,
    maxLength: 20,
  },
  email: {
    type: String,
    required: [true, "Please enter your email address!"],
    trim: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: "Please enter a valid email address.",
    },
  },
  password: {
    type: String,
    minLength: 8,
    maxLength: 16,
    required: [true, "Please enter a password!"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password!"],
  },
});

export const User = mongoose.model("User", userSchema);
