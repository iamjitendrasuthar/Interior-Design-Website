"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none"
      >
        <h3 className="text-xl font-medium text-[#132A13] pr-8">{question}</h3>
        <span
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-gray-100 text-gray-900" : "bg-transparent text-gray-400 hover:bg-gray-50 hover:text-gray-900"}`}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default function FAQ() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-6">
      <div className="text-center mb-16">
        <span className="px-5 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700 mb-6">
          FAQ
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#132A13] mb-6 mt-4">
          Frequently asked questions
        </h2>
        <p className="text-gray-600 text-lg">
          Here are some common questions asked by our clients before starting a
          project.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {[
          {
            q: "How long does a typical interior design project take?",
            a: "It depends on the size of the project. A standard 3BHK apartment interior takes about 45 to 60 days from start to finish.",
          },
          {
            q: "Do you provide budget-friendly options?",
            a: "Yes, we provide options in materials and design choices that suit both your aesthetic vision and your budget.",
          },
          {
            q: "Can we select materials ourselves during execution?",
            a: "Absolutely! We guide you in material selection and even accompany you on market visits so you can choose the best.",
          },
          {
            q: "Do you integrate old furniture into the new design?",
            a: "Yes, if you have any antique or special furniture pieces, we thoughtfully integrate them while designing the new space.",
          },
          {
            q: "What is your design consultation process like?",
            a: "First, we visit the site and discuss your requirements. Then, we present ideas and concepts to you through detailed 2D/3D layouts.",
          },
        ].map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  );
}
