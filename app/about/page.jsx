"use client";
import { motion } from "framer-motion";
import CTASection from "../../components/CTA";
import Counter from "../../components/Counter";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Custom Furniture Design",
  "Spatial Planning & Layout",
  "Sustainable Material Selection",
  "Full Project Management",
];

export default function About() {
  return (
    <>
      <div className="w-full pt-32 pb-24 max-w-7xl mx-auto px-6 overflow-hidden">
        {/* --- Hero Section --- */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#132A13] text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4F772D] animate-pulse" />
              Our Story
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#132A13] leading-[1.1] mb-8">
              A beautiful design is not just seen,{" "}
              <span className="text-gray-400 italic font-light">
                it's felt.
              </span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
              JS Interiors was established in 2015. Our goal is not just to
              decorate homes, but to create spaces that improve your lifestyle
              and where you truly feel at peace.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#4F772D]" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Block */}
            <div className="flex gap-12 pt-10 border-t border-gray-200">
              <div>
                <div className="text-5xl font-bold text-[#132A13] flex items-center">
                  <Counter value={100} />
                  <span>+</span>
                </div>
                <p className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-widest">
                  Projects
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#132A13] flex items-center">
                  <Counter value={8} />
                  <span>+</span>
                </div>
                <p className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-widest">
                  Years Exp.
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- Image Section with Decorative Elements --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            {/* Background Decorative Box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#ECF3E9] rounded-3xl -z-10" />

            <div className="rounded-3xl overflow-hidden h-[500px] md:h-[600px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="/IMG_8905.JPG"
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-10 -left-10 hidden md:block bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="text-[#132A13] font-serif italic text-lg leading-tight">
                "Design is the silent ambassador of your brand."
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- Values / Process Section (Optional but recommended) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-y border-gray-100">
          <div className="space-y-3">
            <h3 className="font-bold text-xl text-[#132A13]">Our Vision</h3>
            <p className="text-gray-500 text-sm">
              To redefine luxury living through sustainable and thoughtful
              interior architecture.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-xl text-[#132A13]">Our Mission</h3>
            <p className="text-gray-500 text-sm">
              Creating functional spaces that reflect the unique personality of
              every client.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-xl text-[#132A13]">Our Philosophy</h3>
            <p className="text-gray-500 text-sm">
              We believe that every corner tells a story, and we are here to
              write yours.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[-20px] mb-20">
        <CTASection />
      </div>
    </>
  );
}
