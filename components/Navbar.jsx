"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[#132A13]"></div>
          <span className="text-xl font-semibold text-[#132A13]">
            JS Interiors
          </span>
        </Link>

        {/* Desktop Links with Flip Animation */}
        <div className="hidden md:flex items-center gap-6 text-md font-medium text-gray-600">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-2 py-1 overflow-hidden block ${
                  isActive ? "text-[#132A13]" : "text-gray-500"
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
          <Link href={"/contact"}>
            <button className="bg-[#132A13] text-white px-6 py-3 text-sm rounded-full hover:bg-opacity-90 transition-all">
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#132A13] bg-gray-50 rounded-lg"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown (Top to Bottom) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.path}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between text-lg font-medium ${
                      pathname === link.path
                        ? "text-[#132A13]"
                        : "text-gray-600"
                    }`}
                  >
                    {link.name}
                    {pathname === link.path && (
                      <div className="w-1.5 h-1.5 bg-[#132A13] rounded-full" />
                    )}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href={"/contact"} onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-[#132A13] text-white py-3 rounded-xl font-semibold">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
