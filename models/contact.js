import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minLength: [2, "Name must be at least 2 characters long"],
    maxLength: [50, "Name must be less than 50 characters long"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    match: [
      /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i,
      "Please enter a valid email address",
    ],
  },

  subject: {
    type: String,
    required: [true, "Subject is required"],
    minLength: [2, "Subject must be at least 2 characters long"],
    maxLength: [100, "Subject must be less than 100 characters long"],
  },

  message: {
    type: String,
    required: [true, "Message is required"],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
