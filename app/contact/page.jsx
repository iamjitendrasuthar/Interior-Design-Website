"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full pt-32 pb-24 max-w-7xl mx-auto px-6">
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 bg-[#132A13] rounded-3xl p-8 md:p-12 w-full text-white"
        >
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm font-medium mb-2 opacity-80">
                Name
              </label>
              <input
                type="text"
                placeholder="JItendra suthar"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 opacity-80">
                Email
              </label>
              <input
                type="email"
                placeholder="jitendrasuthar@example.com"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 opacity-80">
                Tell us about your project
              </label>
              <textarea
                placeholder="e.g., Looking for a 3BHK flat interior design..."
                rows="4"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 transition-colors resize-none"
              ></textarea>
            </div>
            <button className="bg-white text-[#132A13] px-8 py-4 rounded-xl font-medium w-full mt-2 hover:bg-gray-100 transition-colors">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
