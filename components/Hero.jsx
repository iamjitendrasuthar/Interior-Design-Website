"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Sparkles, Users, MessageCircle } from "lucide-react";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Hero() {
  const containerRef = useRef(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
      radius: "rounded-[100px_100px_20px_20px]",
      offset: "-mt-12",
    },
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      radius: "rounded-full",
      offset: "mt-12",
    },
    {
      src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
      radius: "rounded-[20px_20px_100px_100px]",
      offset: "-mt-8",
    },
    {
      src: "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?w=800&q=80",
      radius: "rounded-full",
      offset: "mt-4",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white pt-24 pb-24 md:pt-32 md:pb-40"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Main Glow */}
        <div className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-[#dff5df] rounded-full blur-[180px] opacity-80" />

        {/* Secondary Highlight */}
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-[#ffffff] rounded-full blur-[140px] opacity-40" />

        {/* Bottom Right Ambient Glow */}
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-[#cde8cd] rounded-full blur-[160px] opacity-50" />

        {/* Center Soft Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {" "}
          {/* --- LEFT SIDE: Content --- */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#132A13]/10 shadow-sm mb-8"
            >
              <Sparkles size={16} className="text-[#132A13]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#132A13]/70">
                Crafting Spaces Since 2018{" "}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight text-[#132A13] leading-[0.9] mb-8"
            >
              Creating{" "}
              <span className="text-gray-400 font-light italic">Living</span>{" "}
              <br /> Masterpieces
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Bespoke interior design that harmonizes luxury with everyday
              comfort. Your space is a canvas; we bring the soul to it.
            </motion.p>

            {/* CTA Group - Updated for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full"
            >
              <Link href="/portfolio" className="w-full sm:w-auto group">
                <div className="bg-[#132A13] text-white w-full px-2 py-2 rounded-full font-medium flex items-center justify-center sm:justify-start gap-6 shadow-xl hover:shadow-[#132A13]/20 transition-all border border-[#132A13]">
                  {/* Text container with flex-grow to push it to center on mobile */}
                  <span className="flex-grow sm:flex-grow-0 text-center sm:text-left pl-10 sm:pl-6">
                    Explore Portfolio
                  </span>

                  {/* Icon remains on the right */}
                  <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>

              <Link href="/contact" className="w-full sm:w-auto group">
                <div className="bg-transparent border border-[#132A13]/20 text-[#132A13] w-full justify-center px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#132A13] hover:text-white transition-all duration-300">
                  <MessageCircle size={18} />
                  Let's Talk
                </div>
              </Link>
            </motion.div>

            {/* Stats/Badges for Desktop */}
            <div className="mt-12 hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                  <Users size={20} className="text-[#132A13]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#132A13]">
                    500+ Clients
                  </p>
                  <p className="text-xs text-gray-500">Global Trust</p>
                </div>
              </div>
              <div className="h-10 w-[1px] bg-gray-200" />
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className="text-sm font-bold text-[#132A13]">4.9/5 Rating</p>
              </div>
            </div>
          </div>
          {/* --- RIGHT SIDE: Portrait Filmstrip Gallery --- */}
          <div className="w-full lg:w-7/12 relative h-[70vh] lg:h-[75vh] flex items-center px-4 lg:px-0 overflow-x-clip lg:overflow-visible">
            {/* Main Row Container */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-3 lg:gap-6 w-full h-full items-center justify-center"
            >
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`flex-1 relative group h-[75%] lg:h-[85%] transition-all duration-700 hover:h-[80%] lg:hover:h-[95%] ${img.offset}`}
                >
                  {/* Main Image Wrapper */}
                  <div
                    className={`relative w-full h-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 ${img.radius}`}
                  >
                    {/* Image Layer */}
                    <img
                      src={img.src}
                      alt="Interior Portrait"
                      className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    />

                    {/* Glassy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#132A13]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]" />

                    {/* Numbering */}
                    <div className="absolute top-4 left-4 lg:top-6 lg:left-6 text-white/50 text-[8px] lg:text-[10px] font-mono group-hover:text-white transition-colors z-10">
                      0{i + 1}
                    </div>

                    {/* Content Label */}
                    <div className="absolute inset-x-0 bottom-6 lg:bottom-8 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-10">
                      <p className="text-white text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em]">
                        Minimalist
                      </p>
                    </div>
                  </div>

                  {/* Outer Shadow Glow */}
                  <div
                    className={`absolute inset-0 -z-10 blur-2xl opacity-0 group-hover:opacity-20 bg-[#132A13] transition-opacity duration-700 ${img.radius}`}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Experience Badge (Fixed Placement for Mobile) */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 1 }}
              className="absolute bottom-2 left-2 lg:-bottom-10 lg:-left-10 z-30"
            >
              <div className="w-24 h-24 lg:w-36 lg:h-36 bg-[#132A13] rounded-full border-[4px] lg:border-[8px] border-[#F9FBF9] flex flex-col items-center justify-center text-white shadow-2xl">
                <span className="text-xl lg:text-3xl font-black italic">
                  12+
                </span>
                <span className="text-[6px] lg:text-[7px] uppercase tracking-widest text-white/50 text-center leading-tight">
                  Global <br /> Projects
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
