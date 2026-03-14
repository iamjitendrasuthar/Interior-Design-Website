"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
export default function Hero() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-12 mb-24"
      style={{ marginTop: "120px" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-semibold tracking-tight text-[#132A13] max-w-4xl leading-[1.1] mb-6"
      >
        Premium Interior Design <br className="hidden md:block" /> for Modern
        Homes
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-600 max-w-2xl mb-10"
      >
        We transform your empty house into a beautiful and comfortable home.
        Your dream space starts here. Let's make your vision a reality.
      </motion.p>

      <Link href="/contact">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-[#132A13] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#1a381a] transition-colors"
        >
          Let’s design your dream space <ArrowRight size={18} />
        </motion.button>
      </Link>

      {/* Hero Image Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-20"
      >
        {[
          "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
          "https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
          "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
          "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
        ].map((src, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="w-full h-80 md:h-96 lg:h-[28rem] rounded-3xl overflow-hidden group"
          >
            <img
              src={src}
              alt="Interior illustration"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
