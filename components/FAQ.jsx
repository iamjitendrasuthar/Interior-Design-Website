"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

function FAQItem({ question, answer, isLast, isOpen, toggle }) {
  return (
    <div className={`py-5 ${!isLast ? "border-b border-gray-100" : ""}`}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between text-left focus:outline-none group"
      >
        <h3
          className={`text-lg font-medium transition-colors ${
            isOpen
              ? "text-[#132A13]"
              : "text-gray-700 group-hover:text-[#132A13]"
          }`}
        >
          {question}
        </h3>
        {/* Modern Icon style - FIXED CIRCLE */}
        <div className="flex-none ml-4">
          <span
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 shrink-0 ${
              isOpen
                ? "bg-[#132A13] text-white rotate-180"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
            style={{ minWidth: "35px", minHeight: "35px" }}
          >
            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
          </span>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-3 pb-1 text-gray-600 leading-relaxed max-w-[90%]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How long does a typical interior design project take?",
      a: "It depends on the size of the project. A standard 3BHK apartment interior takes about 45 to 60 days.",
    },
    {
      q: "Do you provide budget-friendly options?",
      a: "Yes, we provide options in materials and design choices that suit both your aesthetic vision and your budget.",
    },
    {
      q: "Can we select materials ourselves during execution?",
      a: "Absolutely! We guide you in material selection and even accompany you on market visits.",
    },
    {
      q: "Do you integrate old furniture into the new design?",
      a: "Yes, if you have any antique pieces, we thoughtfully integrate them while designing the new space.",
    },
    {
      q: "What is your design consultation process like?",
      a: "First, we visit the site and discuss your requirements. Then, we present ideas through 2D/3D layouts.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
        {/* LEFT COLUMN: Modern Content Box */}
        <div className="lg:w-5/12 w-full flex flex-col">
          <div className="bg-[#132A13]/5 p-10 md:p-12 rounded-3xl flex-grow flex flex-col justify-between border border-[#132A13]/10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#132A13] p-2.5 rounded-xl text-white">
                  <HelpCircle size={22} />
                </div>
                <span className="text-sm font-bold tracking-widest text-[#132A13] uppercase">
                  Support
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#132A13] mb-6 leading-tight">
                Frequently asked questions
              </h2>
              <p className="text-gray-600 text-lg mb-12">
                Everything you need to know about our process and how we
                transform your space.
              </p>
            </div>

            <div className="mt-auto border-t border-[#132A13]/10 pt-8 flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src="/IMG_8905.JPG"
                  className="w-full h-full object-cover"
                  alt="Interior"
                />
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">
                  Still have questions?
                </p>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 font-semibold text-[#132A13]"
                >
                  <span className="relative">
                    Get in Touch
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#132A13] transition-all duration-300 group-hover:w-full"></span>
                  </span>

                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#132A13]/20 group-hover:border-[#132A13] group-hover:bg-[#132A13] group-hover:text-white transition-all duration-300">
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: FAQ Accordion */}
        <div className="lg:w-7/12 w-full flex flex-col">
          <div className="bg-white rounded-3xl p-6 md:p-10 flex-grow border border-gray-100 shadow-lg shadow-gray-50">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isLast={i === faqs.length - 1}
                isOpen={openIndex === i}
                toggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
