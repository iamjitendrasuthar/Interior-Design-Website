"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Current page check karne ke liye

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 z-[999]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[#132A13]"></div>
          <span className="text-xl font-semibold text-[#132A13]">
            JS Interiors
          </span>
        </Link>

        {/* Desktop Links with Flip Animation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-2 py-1 overflow-hidden block ${
                  isActive ? "text-[#132A13]" : "text-gray-600"
                }`}
              >
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  className="relative flex flex-col"
                >
                  <motion.span
                    variants={{
                      initial: { y: 0 },
                      hover: { y: "-100%" },
                    }}
                    transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                    className="block"
                  >
                    {link.name}
                  </motion.span>
                  <motion.span
                    variants={{
                      initial: { y: "100%" },
                      hover: { y: 0 },
                    }}
                    transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                    className="absolute inset-0 block text-[#132A13]"
                  >
                    {link.name}
                  </motion.span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-left font-medium ${pathname === link.path ? "text-[#132A13]" : "text-gray-600"}`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
