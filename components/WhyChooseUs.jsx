"use client";
import { motion } from "framer-motion";
import { Paintbrush, Award, Sparkles, ShieldCheck } from "lucide-react";
import Counter from "./Counter";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="px-5 py-2 rounded-full bg-[#f0f4f0] text-sm font-medium text-[#132A13] mb-6 inline-block">
          Benefits
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#132A13] mb-6">
          Why choose us?
        </h2>
        <p className="text-gray-600 text-lg">
          Choosing the right interior designer can be daunting. We make the
          design process simple, transparent, and completely aligned with your
          aesthetic and budget.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Card 1 - Tailored Design */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#f8f9f8] border border-gray-100 rounded-3xl p-10 md:col-span-2 flex flex-col justify-between overflow-hidden relative group hover:shadow-lg transition-all duration-500"
        >
          <div className="z-10 relative">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Paintbrush className="text-[#132A13]" size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-[#132A13]">
              Design tailored to your style
            </h3>
            <p className="text-gray-600 max-w-md text-lg">
              We understand your vision and create a space that truly reflects
              your personality and preferences. Every corner is meticulously
              planned.
            </p>
          </div>

          {/* Animated Progress Line */}
          <div className="mt-12 h-16 relative flex items-center">
            <div className="w-full h-1.5 bg-gray-200 rounded-full relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full bg-[#132A13] rounded-full"
              />
              <div className="absolute top-1/2 left-[75%] -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-[#132A13] rounded-full flex items-center justify-center shadow-md"></div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 - Timeless Aesthetics */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#f8f9f8] border border-gray-100 rounded-3xl p-10 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-500 relative overflow-hidden group"
        >
          <Sparkles
            className="absolute top-6 right-6 text-yellow-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
            size={32}
          />
          <div className="w-40 h-40 mb-8 relative group-hover:-translate-y-2 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400&auto=format&fit=crop"
              alt="Aesthetics"
              className="w-full h-full object-cover rounded-full shadow-md"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-[#132A13]">
            Timeless Aesthetics
          </h3>
          <p className="text-sm text-gray-500">Elegance that never fades.</p>
        </motion.div>

        {/* Card 3 - Award Winning */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#132A13] text-white rounded-3xl p-10 flex flex-col justify-center text-center hover:shadow-xl transition-all duration-500 group"
        >
          <div className="mx-auto bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
            <Award className="text-yellow-400" size={36} />
          </div>
          <h3 className="text-3xl font-semibold mb-4">Award Winning</h3>
          <p className="text-white/80 text-lg">
            Recognized for premium quality materials and exclusive designs.
          </p>
        </motion.div>

        {/* Card 4 - Expert Team */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#f8f9f8] border border-gray-100 rounded-3xl p-10 md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-lg transition-all duration-500"
        >
          <div className="flex-1">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <ShieldCheck className="text-[#132A13]" size={28} />
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 flex items-center gap-4 text-[#132A13]">
              Expert{" "}
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop"
                alt="Team member"
                className="w-14 h-14 rounded-full object-cover inline-block border-2 border-white shadow-sm"
              />{" "}
              Team
            </h3>
            <p className="text-gray-600 text-lg max-w-md">
              Think of us as your in-house experts. Guaranteed on-time delivery
              and flawless execution every time.
            </p>
          </div>
          <div className="text-6xl md:text-8xl font-bold text-[#132A13] opacity-20">
            <Counter value={50} />+
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
