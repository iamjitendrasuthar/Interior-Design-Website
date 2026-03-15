"use client";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Sending state ka toast
    const toastId = toast.loading("Sending your message...");

    emailjs
      .sendForm(
        "service_yh5gznc",
        "template_aa6vn4r",
        formRef.current,
        { publicKey: "d0D0yVwnwK4bBx3-I" }, // Object syntax
      )
      .then(
        (result) => {
          // Success hone par loading toast ko success mein badlein
          toast.success("Message sent successfully!", { id: toastId });
          formRef.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          // Error aane par error toast dikhayein
          toast.error(`Failed to send: ${error.text || error.message}`, {
            id: toastId,
          });
          setIsSubmitting(false);
        },
      );
  };

  return (
    <div className="w-full pt-32 pb-24 max-w-7xl mx-auto px-6 relative">
      {/* Toaster component ko render karna zaroori hai taaki toasts screen par dikhein */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#132A13",
            color: "#fff",
            borderRadius: "12px",
            padding: "16px",
          },
        }}
      />

      <div className="flex flex-col md:flex-row gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <span className="text-sm font-medium text-gray-500 mb-4 block">
            Contact us
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#132A13] mb-6 leading-tight">
            Let's talk about your project
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Fill out the form below to discuss the design of your new home or
            office. Our design team will get in touch with you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 bg-[#132A13] rounded-3xl p-8 md:p-12 w-full text-white"
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-6"
          >
            <div>
              <label className="block text-sm mb-2 opacity-80">Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 opacity-80">Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="your@email.com"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 opacity-80">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white resize-none focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-white text-[#132A13] px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-gray-100 hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
