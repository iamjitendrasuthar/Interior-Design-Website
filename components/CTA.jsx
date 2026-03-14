"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function CTASection() {
  const col1Images = [
    "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&auto=format&fit=crop&q=60",
  ];

  const col2Images = [
    "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&auto=format&fit=crop&q=60",
  ];

  // Scroll progress
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const col1Y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 mb-12">
      <div className="bg-[#f8f9f8] rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative" style={{zIndex:"-2"}}>
        {/* Left Content */}
        <div className="md:w-1/2 z-10 p-8 md:p-16">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#132A13] mb-6">
            Ready to build your dream home?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Book a consultation today to speak with an expert interior designer
            and discuss your ideas. Let's give your space a new identity.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#132A13] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#1a381a] transition-colors shadow-lg"
            >
              Let’s design your dream space <ArrowRight size={18} />
            </motion.button>
          </Link>
        </div>

        <div
          ref={containerRef}
          className="md:w-1/2 w-full h-[500px] relative overflow-hidden flex gap-4"
        >
          {/* fade */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f8f9f8] to-transparent z-20" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f8f9f8] to-transparent z-20" />

          {/* column 1 */}
          <motion.div
            style={{ y: col1Y }}
            className="flex flex-col gap-4 w-1/2"
          >
            {[...col1Images, ...col1Images, ...col1Images].map((src, i) => (
              <img
                key={i}
                src={src}
                className="rounded-3xl h-60 object-cover w-full"
              />
            ))}
          </motion.div>

          {/* column 2 */}
          <motion.div
            style={{ y: col2Y }}
            className="flex flex-col gap-4 w-1/2"
          >
            {[...col2Images, ...col2Images, ...col2Images].map((src, i) => (
              <img
                key={i}
                src={src}
                className="rounded-3xl h-72 object-cover w-full"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
