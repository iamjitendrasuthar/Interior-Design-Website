"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Portfolio() {
  const projects = [
    {
      id: "minimalist-villa-pune",
      tag: "Residential",
      title: "Minimalist Villa, Pune",
      img: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=600&auto=format&fit=crop](https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=600&auto=format&fit=crop)",
    },
    {
      id: "luxury-penthouse-mumbai",
      tag: "Apartment",
      title: "Luxury Penthouse, Mumbai",
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop](https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop)",
    },
    {
      id: "startup-workspace-blr",
      tag: "Commercial",
      title: "Startup Workspace, Blr",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop](https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop)",
    },
    {
      id: "modern-duplex-delhi",
      tag: "Residential",
      title: "Modern Duplex, Delhi",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop](https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop)",
    },
    {
      id: "modular-kitchen-setup",
      tag: "Kitchen",
      title: "Modular Kitchen Setup",
      img: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHwwfDB8fHww",
    },
    {
      id: "boutique-cafe-goa",
      tag: "Commercial",
      title: "Boutique Cafe, Goa",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop](https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop)",
    },
  ];

  return (
    <div className="w-full pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="mb-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#132A13] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#4F772D] animate-pulse" />
            Portfolio{" "}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#132A13] mb-8 leading-[1.1]">
            Our best{" "}
            <span className="text-gray-400 italic font-light text-4xl md:text-6xl block">
              work
            </span>
          </h1>
          <p className="text-gray-500 text-lg">
            Explore our recent interior design projects and see how beautifully
            we have transformed different spaces. Click on any project to view
            details.{" "}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <Link key={project.id} href={`/portfolio/${project.id}`}>
              <motion.div
                // @ts-ignore
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="rounded-3xl overflow-hidden h-72 mb-6 relative">
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
                </div>
                <h3 className="text-xl font-semibold text-[#132A13] group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
      <div className="mt-30 flex justify-center">
        <Link href="/contact">
          <div className="bg-[#132A13] text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 hover:bg-[#1a381a] transition-colors">
            <span className="whitespace-nowrap">Start your project</span>
            <ArrowRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}
