"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <span className="text-sm font-medium text-gray-500 mb-4 block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#132A13] mb-6">
            A beautiful design is not just seen, it's felt.
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            JS Interiors was established in 2015. Our goal is not just to
            decorate homes, but to create spaces that improve your lifestyle and
            where you truly feel at peace.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
            <div>
              <div className="text-4xl font-bold text-[#132A13] mb-2">100+</div>
              <div className="text-sm text-gray-500">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#132A13] mb-2">8+</div>
              <div className="text-sm text-gray-500">Years of Experience</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 w-full"
        >
          <div className="rounded-3xl overflow-hidden h-[500px]">
            <img
              src="/IMG_8905.JPG"
              alt="Interior"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
