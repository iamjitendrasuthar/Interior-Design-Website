"use client";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

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
      toast.error("Network issue 😢 Please try again.", { id: toastId });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#fafaf9] selection:bg-[#132A13] selection:text-white">
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#132A13]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#132A13]/10 blur-[120px]" />
      </div>

      <Toaster position="bottom-center" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT SIDE: CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-[#132A13] text-white rounded-full"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#132A13] text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4F772D] animate-pulse" />
                Get In Touch
              </div>
            </motion.span>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#132A13] mb-8 leading-[0.9]">
              Let's create <br />
              <span className="text-gray-400 italic font-light">magic.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-md leading-relaxed">
              Have a vision? We have the expertise. Drop us a message and let's
              start building your dream space.
            </p>

            <div className="space-y-8">
              <ContactDetail
                icon={<Mail size={22} />}
                label="Email us"
                value="hello@yourdomain.com"
              />
              <ContactDetail
                icon={<Phone size={22} />}
                label="Call us"
                value="+91 98765 43210"
              />
              <ContactDetail
                icon={<MapPin size={22} />}
                label="Visit us"
                value="123 Design Street, Mumbai, MH"
              />
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: PREMIUM FORM --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#132A13] rounded-[40px] rotate-2 scale-105 opacity-5 -z-10" />

            <div className="bg-white border border-gray-100 shadow-[0_32px_64px_-16px_rgba(19,42,19,0.1)] rounded-[40px] p-8 md:p-12">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                  />
                  <FloatingInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <FloatingInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 00000 00000"
                />

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-[#132A13] focus:ring-2 focus:ring-[#132A13]/20 transition-all outline-none resize-none"
                    placeholder="Tell us about your project goals..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-[#132A13] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 group transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <ArrowRight
                        className="group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Sub-component for Inputs
function FloatingInput({ label, name, type, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-[#132A13] focus:ring-2 focus:ring-[#132A13]/20 transition-all outline-none"
      />
    </div>
  );
}

// Sub-component for Contact Details
function ContactDetail({ icon, label, value }) {
  return (
    <div className="flex items-center gap-5 group cursor-pointer">
      <div className="w-12 h-12 flex items-center justify-center bg-white border border-gray-100 shadow-sm rounded-2xl text-[#132A13] group-hover:bg-[#132A13] group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-0.5">
          {label}
        </p>
        <p className="text-[#132A13] font-semibold text-lg">{value}</p>
      </div>
    </div>
  );
}
