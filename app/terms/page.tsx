"use client";
import { motion } from "framer-motion";
import {
  Scale,
  FileCheck,
  AlertCircle,
  Ban,
  RefreshCcw,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const termSections = [
  {
    title: "1. Acceptance of Terms",
    icon: <FileCheck className="w-6 h-6" />,
    content:
      "By accessing our website and using our interior design services, you agree to be bound by these Terms and Conditions. If you disagree with any part, you may not access our services.",
  },
  {
    title: "2. Service Scope",
    icon: <Scale className="w-6 h-6" />,
    content:
      "We provide interior design, space planning, and project management. Specific deliverables and timelines are outlined in individual project contracts signed before work begins.",
  },
  {
    title: "3. Payment & Refund Policy",
    icon: <RefreshCcw className="w-6 h-6" />,
    content:
      "A booking deposit is required to initiate design work. Payments are non-refundable once the design phase has started. Final project handover occurs only after full payment is cleared.",
  },
  {
    title: "4. Intellectual Property",
    icon: <AlertCircle className="w-6 h-6" />,
    content:
      "All design concepts, 3D renders, and technical drawings provided by us remain our intellectual property until the final project completion and full payment transfer.",
  },
  {
    title: "5. Prohibited Uses",
    icon: <Ban className="w-6 h-6" />,
    content:
      "You may not use our designs for commercial reproduction without written consent. Misuse of our website or intellectual property will result in immediate termination of services.",
  },
];

export default function TermsAndConditions() {
  return (
    <div className="relative min-h-screen bg-[#fafaf9] selection:bg-[#132A13] selection:text-white">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] rounded-full bg-[#4F772D]/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Navigation back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#132A13] transition-colors mb-12 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-bold uppercase tracking-widest">
            Return Home
          </span>
        </Link>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#132A13] mb-8 leading-tight">
            Terms of <br />
            <span className="text-gray-400 italic font-light">Service.</span>
          </h1>
          <div className="h-1 w-20 bg-[#4F772D] mb-8" />
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Please read these terms carefully before starting your project with
            us. These rules ensure a smooth and professional collaboration for
            both parties.
          </p>
        </motion.div>

        {/* Terms List */}
        <div className="grid grid-cols-1 gap-10">
          {termSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex gap-8 p-6 rounded-[2rem] hover:bg-white hover:shadow-xl hover:shadow-[#132A13]/5 transition-all duration-500 border border-transparent hover:border-gray-100"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#132A13] group-hover:bg-[#132A13] group-hover:text-white transition-colors duration-300">
                {section.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#132A13] mb-3 uppercase tracking-tight">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-md">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal Disclaimer Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-10 rounded-[3rem] border-2 border-dashed border-gray-200 bg-gray-50/50"
        >
          <p className="text-sm text-gray-400 text-center italic leading-loose">
            Disclaimer: These terms are subject to change without prior notice.
            We recommend visiting this page periodically to stay updated on our
            service policies. For legal inquiries, please contact our
            administrative team at legal@yourdomain.com.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
