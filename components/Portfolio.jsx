"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Portfolio() {
  return (
    <section className="bg-gray-50 py-20 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#132A13]">
              Our latest projects
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 font-medium hover:text-gray-600 transition-colors">
            View all projects <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              tag: "Residential",
              date: "April 2025",
              title: "Modern Minimalist Villa, Pune",
              img: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=600&auto=format&fit=crop",
            },
            {
              tag: "Apartment",
              date: "Jan 2025",
              title: "Luxury Penthouse Setup, Mumbai",
              img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop",
            },
            {
              tag: "Commercial",
              date: "Nov 2024",
              title: "Tech Startup Creative Workspace",
              img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group cursor-pointer"
              //   onClick={() => setCurrentPage("portfolio")}
            >
              <div className="rounded-3xl overflow-hidden h-64 mb-6 relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} className="text-[#132A13]" />
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-[#132A13] font-medium">
                  {project.tag}
                </span>
                <span>{project.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#132A13] group-hover:text-gray-600 transition-colors">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
