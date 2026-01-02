import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isloading) {
      return;
    }
    setIsloading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      setStatus("❌ Failed to send message. Please try again later.");
    }
  };

  const [isloading, setIsloading] = useState(false);
  return (
    <section className="py-24 px-6 md:px-16 bg-linear-to-tr from-[#0a0f13] via-[#122c3d] to-[#1b3e4b] text-gray-100 flex flex-col items-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-white drop-shadow-lg"
      >
        Contact Me
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-400 text-center max-w-2xl mb-10"
      >
        Have a question, idea, or project in mind? I'd love to hear from you —
        just drop a message below 👇
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full max-w-lg bg-[#0e161a]/70 backdrop-blur-lg p-8 rounded-2xl shadow-[0_0_20px_rgba(20,230,230,0.1)] flex flex-col gap-5 border border-gray-800"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition-all"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition-all"
        />
        <button
          type="submit"
          className={`${isloading && "animate-pulse"}
          bg-gradient-to-r from-teal-400 to-cyan-500
           text-gray-900 font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all`}
          
        >
         {isloading?"Sending ": "Send Message"}
        </button>

        {status && (
          <p
            className={`text-center mt-3 font-medium ${
              status.includes("✅") ? "text-teal-400" : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default ContactForm;
