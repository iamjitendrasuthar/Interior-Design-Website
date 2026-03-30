"use client";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    const sendRequest = () =>
      emailjs.sendForm("service_yh5gznc", "template_aa6vn4r", formRef.current, {
        publicKey: "d0D0yVwnwK4bBx3-I",
      });

    try {
      await sendRequest();
      toast.success("Message sent successfully ✅", { id: toastId });
      formRef.current.reset();
    } catch (err) {
      console.log("Error:", err);
      try {
        await new Promise((res) => setTimeout(res, 2000));
        await sendRequest();
        toast.success("Message sent successfully ✅", { id: toastId });
        formRef.current.reset();
      } catch (error) {
        toast.error("Network issue 😢 Please try again.", { id: toastId });
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="w-full pt-32 pb-24 max-w-7xl mx-auto px-6 relative">
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
          className="md:w-1/2 w-full"
        >
          <span className="text-sm font-medium text-gray-500 mb-4 block uppercase tracking-widest">
            Contact us
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#132A13] mb-6 leading-tight">
            Let's talk about your project
          </h1>
          <p className="text-gray-600 text-lg mb-10">
            Fill out the form below to discuss the design of your new home or
            office. Our design team will get in touch with you within 24 hours.
          </p>

          {/* Desktop Only Contact Details (Hidden on Mobile) */}
          <div className="hidden md:flex flex-col gap-6">
            <ContactInfo />
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: FORM & MOBILE CONTACT INFO --- */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#132A13] rounded-3xl p-8 md:p-12 w-full text-white shadow-2xl"
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >
              <div>
                <label className="block text-sm mb-2 opacity-80 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 opacity-80 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 opacity-80 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 opacity-80 font-medium">
                  Message
                </label>
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
                className={`bg-white text-[#132A13] px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-gray-100 hover:scale-[1.02] active:scale-95"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Mobile Only Contact Details (Hidden on Desktop) */}
          <div className="flex md:hidden flex-col gap-6 mt-12 px-2">
            <div className="w-12 h-1 bg-[#132A13]/20 rounded-full mb-2" />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Contact Info Component
function ContactInfo() {
  return (
    <>
      <div className="flex items-center gap-4 group">
        <div className="p-3 bg-gray-100 rounded-lg text-[#132A13]">
          <Mail size={20} />
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase font-bold">Email us</p>
          <p className="text-[#132A13] font-medium">hello@yourdomain.com</p>
        </div>
      </div>

      <div className="flex items-center gap-4 group">
        <div className="p-3 bg-gray-100 rounded-lg text-[#132A13]">
          <Phone size={20} />
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase font-bold">Call us</p>
          <p className="text-[#132A13] font-medium">+91 98765 43210</p>
        </div>
      </div>

      <div className="flex items-center gap-4 group">
        <div className="p-3 bg-gray-100 rounded-lg text-[#132A13]">
          <MapPin size={20} />
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase font-bold">Visit us</p>
          <p className="text-[#132A13] font-medium leading-tight">
            123 Design Street, Creative Block,
            <br />
            Mumbai, Maharashtra 400001
          </p>
        </div>
      </div>
    </>
  );
}
