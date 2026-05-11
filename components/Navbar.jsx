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

  // 1. Background Scroll Lock: Menu khulne par peeche ka page scroll nahi hoga
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <>
      <header
        className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-lg border-b border-[#132A13]/5 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-5 h-5 rounded-full bg-[#132A13] group-hover:scale-125 transition-transform duration-300"></div>
            <span className="text-xl font-bold tracking-tight text-[#132A13]">
              JS Interiors
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-md font-medium">
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
                      variants={{ initial: { y: 0 }, hover: { y: "-100%" } }}
                      transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                    >
                      {link.name}
                    </motion.span>
                    <motion.span
                      className="absolute inset-0 block text-[#132A13]"
                      variants={{ initial: { y: "100%" }, hover: { y: 0 } }}
                      transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                    >
                      {link.name}
                    </motion.span>
                  </motion.div>
                </Link>
              );
            })}
            <Link href="/contact">
              <motion.button
                initial="initial"
                whileHover="hover"
                className="bg-[#132A13] text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1a3a1a] transition-all active:scale-95 overflow-hidden"
              >
                <div className="relative h-5 overflow-hidden flex items-center justify-center">
                  {/* Top Text */}
                  <motion.span
                    variants={{
                      initial: { y: 0 },
                      hover: { y: "-100%" },
                    }}
                    transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
                    className="block"
                  >
                    Get in Touch
                  </motion.span>

                  {/* Bottom Text */}
                  <motion.span
                    variants={{
                      initial: { y: "100%" },
                      hover: { y: 0 },
                    }}
                    transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
                    className="absolute left-0 top-0 w-full block"
                  >
                    Get in Touch
                  </motion.span>
                </div>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-[#132A13] bg-gray-50 rounded-lg"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU (Rendered Outside Header to fix Blur) --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] md:hidden">
            {/* Backdrop Blur - iski height h-full rakhein */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-md h-full w-full"
            />

            {/* Right Side Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              // FIX: h-screen ki jagah h-[100dvh] use karein aur pb-20 ya pb-24 padding dein
              className="absolute top-0 right-0 h-[100dvh] w-[80%] bg-white shadow-2xl flex flex-col p-8 pb-20"
            >
              {/* Menu Close Button */}
              <div className="flex justify-between items-center mb-10">
                <span className="font-bold text-[#132A13] text-lg uppercase tracking-widest">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 bg-gray-100 rounded-full"
                >
                  <X size={24} className="text-[#132A13]" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-semibold tracking-tight ${
                        pathname === link.path
                          ? "text-[#132A13]"
                          : "text-gray-400"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Contact Button - Iski position fix karne ke liye mt-auto aur extra padding */}
              <div className="mt-auto">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-[#132A13] text-white py-4 rounded-2xl font-bold text-lg shadow-lg">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
