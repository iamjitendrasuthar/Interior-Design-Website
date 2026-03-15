"use client";
import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import CTA from "@/components/CTA";

// Mock database
const projectDetails = {
  "minimalist-villa-pune": {
    title: "Minimalist Villa, Pune",
    category: "Residential",
    client: "Mr. Sharma & Family",
    timeline: "3 Months",
    heroImg:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1200&auto=format&fit=crop)",
    overview:
      "This minimalist villa in Pune was designed with a focus on natural light, open spaces, and sustainable materials. The goal was to create a serene environment that seamlessly blends modern aesthetics with functional living. We removed unnecessary walls to create a fluid living, dining, and kitchen area, enhancing the overall sense of space.",
    features: [
      "Custom Modular Kitchen with Smart Appliances",
      "Italian Marble Flooring throughout the living space",
      "Bespoke Wooden Paneling and Hidden Storage",
      "Automated Smart Lighting System",
      "Minimalist False Ceiling with Ambient Cove Lights",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop)",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop)",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop)",
    ],
  },
  default: {
    title: "Luxury Interior Project",
    category: "Interior Design",
    client: "Private Client",
    timeline: "2-4 Months",
    heroImg:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop)",
    overview:
      "This project represents our commitment to creating high-end, functional, and deeply personalized spaces. From the initial concept to the final handover, every detail was carefully curated to meet the client's lifestyle and aesthetic desires.",
    features: [
      "Complete Space Planning & Layout",
      "Premium Material Selection & Sourcing",
      "Custom Furniture Manufacturing",
      "Advanced Lighting Design",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop)",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop)",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop)",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop)",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop)",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop)",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop)",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop)",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=1200&auto=format&fit=crop)",
    ],
  },
};

export default function ProjectDetail({ params }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const resolvedParams = use(params);
  const project = projectDetails[resolvedParams?.id] || projectDetails.default;

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1,
    );
  };

  return (
    <div className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#132A13] font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back
        </Link>

        {/* Project Header */} 
        <div className="mb-12">
          <span className="px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700 mb-4 inline-block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#132A13] mb-8">
            {project.title}
          </h1>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-sm"
          >
            <img
              src={project.heroImg}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Project Info & Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Left Col: Details */}
          <div className="md:col-span-1 flex flex-col gap-6 p-8 bg-[#f8f9f8] rounded-3xl h-fit">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Client</p>
              <p className="text-lg font-semibold text-[#132A13]">
                {project.client}
              </p>
            </div>
            <div className="w-full h-px bg-gray-200"></div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Category</p>
              <p className="text-lg font-semibold text-[#132A13]">
                {project.category}
              </p>
            </div>
            <div className="w-full h-px bg-gray-200"></div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Timeline</p>
              <p className="text-lg font-semibold text-[#132A13]">
                {project.timeline}
              </p>
            </div>
          </div>

          {/* Right Col: Overview & Highlights */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-semibold mb-6 text-[#132A13]">
              Project Overview
            </h3>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {project.overview}
            </p>

            <h3 className="text-2xl font-semibold mb-6 text-[#132A13]">
              What we did
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-[#132A13] mt-1 shrink-0"
                    size={20}
                  />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold mb-8 text-[#132A13]">
            Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {project.gallery.map((imgUrl, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setActiveIndex(idx)}
                className="rounded-2xl overflow-hidden h-64 cursor-pointer group shadow-sm"
              >
                <img
                  src={imgUrl}
                  alt={`Gallery view ${idx}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Slider */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          >
            {/* Slider Image Wrapper */}
            <div className="relative w-[95vw] h-[85vh] flex items-center justify-center overflow-hidden">
              <motion.img
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={project.gallery[activeIndex]}
                className="w-full h-full object-cover rounded-lg shadow-2xl pointer-events-auto"
                style={{
                  width: "clamp(300px, 90vw, 1200px)",
                  height: "clamp(450px, 40vh, 700px)",
                }}
                onClick={(e) => e.stopPropagation()}
                alt={`Slide ${activeIndex}`}
              />

              {/* CLOSE BUTTON */}
              <button
                className="
      absolute 
      md:top-6 md:right-6 
      z-[9999]
      bg-black/50 backdrop-blur
      rounded-full p-2
      text-white
    "
                style={{
                  top: "15px",
                  right: "15px",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(null);
                }}
              >
                <X size={28} />
              </button>

              {/* PREV */}
              <button
                className="
      absolute 
      left-2 md:left-6 
      top-1/2 -translate-y-1/2 
      z-[9999]
      bg-black/50 backdrop-blur
      rounded-full p-2 md:p-3
      text-white
    "
                onClick={handlePrev}
              >
                <ChevronLeft size={28} />
              </button>

              {/* NEXT */}
              <button
                className="
      absolute 
      right-2 md:right-6 
      top-1/2 -translate-y-1/2 
      z-[9999]
      bg-black/50 backdrop-blur
      rounded-full p-2 md:p-3
      text-white
    "
                onClick={handleNext}
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section at the bottom */}
      <CTA />
    </div>
  );
}
