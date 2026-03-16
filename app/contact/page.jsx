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
    const toastId = toast.loading("Sending your message...");

    emailjs
      .sendForm("service_yh5gznc", "template_aa6vn4r", formRef.current, {
        publicKey: "d0D0yVwnwK4bBx3-I",
      })
      .then(
        () => {
          toast.success("Message sent successfully!", { id: toastId });
          formRef.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          toast.error(`Failed to send: ${error.text || error.message}`, {
            id: toastId,
          });
          setIsSubmitting(false);
        },
      );
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-50">
      <Toaster position="top-right" />

      {/* 1. Map Section */}
      <div className="w-full h-[500px] md:h-[600px] bg-gray-200 relative overflow-hidden">
        {/* Replace this div with your Google Maps iframe or component */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.900796170977!2d72.646532374842!3d25.341109725857752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39430112e4ea0789%3A0xd4335533ec0833bd!2sSharda%20Motors%20-%20Hero%20MotoCorp!5e0!3m2!1sen!2sin!4v1773662450841!5m2!1sen!2sin"
          className="absolute top-[-150px] left-0 w-full h-[calc(100%+150px)]  contrast-125 transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:contrast-100"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        {/* Overlay to make map look slightly darker if needed */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      </div>

      {/* 2. Contact Form Container (The Overlap Logic) */}
      <div className="relative max-w-5xl mx-auto px-6 -mt-32 pb-24 z-10">
        {/* -mt-32 (Negative Margin) pulls the form up into the map area */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#132A13] rounded-[2rem] p-8 md:p-16 shadow-2xl text-white flex flex-col md:flex-row gap-12"
        >
          {/* Left Side: Text */}
          <div className="md:w-2/5">
            <span className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Let's build your dream space.
            </h2>
            <p className="text-gray-300 text-lg">
              Our design team will get back to you within 24 hours to discuss
              your project details.
            </p>
          </div>

          {/* Right Side: Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="md:w-3/5 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase opacity-60">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase opacity-60">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase opacity-60">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase opacity-60">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-emerald-500 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 bg-white text-[#132A13] font-bold py-4 rounded-xl transition-all ${
                isSubmitting
                  ? "opacity-50"
                  : "hover:bg-emerald-400 hover:scale-[1.01]"
              }`}
            >
              {isSubmitting ? "Processing..." : "Submit Inquiry"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
