import connectDB from "@/lib/mongodb";
import Contact from "@/models/contact";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    try {
      await connectDB();

      // Create a new contact using the Contact model
      const newContact = await Contact.create({
        name,
        email,
        subject,
        message,
      });

      // Respond with a success message
      res
        .status(200)
        .json({ msg: "Message received successfully!", data: newContact });
    } catch (error) {
      // Handle validation errors
      if (error instanceof mongoose.Error.ValidationError) {
        let errorList = [];
        for (let e in error.errors) {
          errorList.push(error.errors[e].message);
        }
        console.log(errorList);
        res.status(405).json({ msg: errorList });
      } else {
        // Handle other types of errors
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
      }
    }
  } else {
    res.status(405).end();
  }
}
