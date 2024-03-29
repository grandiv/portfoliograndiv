"use client";
// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

// hooks
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    const res = await fetch("/api/contact/route", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    const { msg } = await res.json();
    setError(Array.isArray(msg) ? msg : [msg]);

    if (res.status === 200) {
      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex-1 flex flex-col gap-6 w-full mx-auto max-sm:items-center"
      >
        {/* input group */}
        <div className="flex gap-x-6 w-full max-sm:flex-col max-sm:gap-6">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            placeholder="Name"
            className="input capitalize"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            type="text"
            placeholder="Email"
            className="input"
          />
        </div>
        <input
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          type="text"
          id="subject"
          placeholder="Subject"
          className="input capitalize"
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          id="message"
          placeholder="Message"
          className="textarea"
        ></textarea>
        <button
          className="btn rounded-full border border-white/50 max-w-[178px]
                px-8 transition-all duration-300 flex items-center justify-center
                overflow-hidden hover:border-accent group max-sm:h-[5.5vh] max-sm:w-50%"
          type="submit"
        >
          <span
            className="group-hover:-translate-y-[120%] group-hover:opacity-0
                    transition-all duration-500"
          >
            Let&apos;s talk
          </span>
          <BsArrowRight
            className="-translate-y-[120%] opacity-0 group-hover:flex
                    group-hover:-translate-y-0 group-hover:opacity-100 transition-all 
                    duration-300 absolute text-[22px]"
          />
        </button>
      </motion.form>
      <div className="flex-col flex py-2 mx-auto text-center max-sm:w-full max-sm:grid max-sm:grid-cols-2 max-sm:grid-rows-2">
        {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`${
                success ? "text-accent" : "text-red-500"
              } px-5 py-1 max-sm:py-[0.5vh] max-sm:text-[3.1vw]`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}
