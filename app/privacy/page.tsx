"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Information We Collect",
    icon: <Eye className="w-6 h-6" />,
    content:
      "We collect information you provide directly to us when you fill out our contact form, including your name, email address, phone number, and any details regarding your project vision.",
  },
  {
    title: "How We Use Your Data",
    icon: <FileText className="w-6 h-6" />,
    content:
      "The information we collect is used solely to provide our services, respond to inquiries, and manage project workflows. We do not sell or lease your personal data to third parties.",
  },
  {
    title: "Data Security",
    icon: <Lock className="w-6 h-6" />,
    content:
      "We implement industry-standard security measures to maintain the safety of your personal information. Your data is stored behind secured networks and is only accessible by a limited number of persons.",
  },
  {
    title: "Your Rights",
    icon: <ShieldCheck className="w-6 h-6" />,
    content:
      "You have the right to request a copy of the data we hold about you, or to ask us to delete any personal information. Simply contact us at hello@yourdomain.com for such requests.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-[#fafaf9] selection:bg-[#132A13] selection:text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-5%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#132A13]/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#132A13] transition-colors mb-12 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#132A13] text-xs font-bold uppercase tracking-wider mb-6">
            Legal Documentation
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-[#132A13] mb-6">
            Privacy{" "}
            <span className="text-gray-400 italic font-light">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Last Updated: May 2026. Your privacy is our priority. This policy
            outlines how we handle your personal information.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white border border-gray-100 shadow-sm rounded-2xl text-[#132A13] group-hover:bg-[#132A13] group-hover:text-white transition-all duration-300">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#132A13] mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-[32px] bg-[#132A13] text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Questions about our policy?
          </h3>
          <p className="text-gray-300 mb-6">
            If you have any concerns regarding your data, feel free to reach
            out.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#4F772D] hover:bg-[#5a8934] text-white px-8 py-3 rounded-xl font-bold transition-all"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
