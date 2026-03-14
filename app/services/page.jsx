"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <div className="w-full pt-32 pb-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <span className="text-sm font-medium text-gray-500 mb-4 block">
          Our Services
        </span>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#132A13] mb-6">
          To turn your vision into reality
        </h1>
      </motion.div>

      <div className="flex flex-col gap-20">
        {[
          {
            title: "1. Space Planning & Layout",
            desc: "We create smart and functional layouts to maximize the use of your space. Utilizing every square inch perfectly is our specialty.",
            features: [
              "2D Floor Plans",
              "3D Visualization",
              "Ergonomic Layouts",
            ],
            img: "https://media.istockphoto.com/id/2193767201/photo/family-makes-an-agreement-with-a-worker-doing-renovations-in-the-apartment.webp?a=1&b=1&s=612x612&w=0&k=20&c=LP3YSxVb68fg15_AgrHcIKXjjMEAgB4IymAcaYIAKAY=",
          },
          {
            title: "2. Custom Furniture Design",
            desc: "Bespoke furniture that matches your aesthetic style and fits perfectly in your space. We only use high-quality, durable materials.",
            features: [
              "Material Selection",
              "Premium Finish",
              "Modular Kitchens",
            ],
            img: "https://media.istockphoto.com/id/1061173208/photo/young-carpenter-using-sander-while-working-on-a-piece-of-wood.webp?a=1&b=1&s=612x612&w=0&k=20&c=1RsjX0YSceJPpaPg1PPhOQk-3s8_ITgniz7YTqYC3Qo=",
          },
          {
            title: "3. Project Management & Execution",
            desc: "We give you a chance to relax while our team supervises and executes every task on-site. We guarantee on-time delivery with no compromises.",
            features: [
              "Contractor Coordination",
              "Quality Control",
              "On-time Delivery",
            ],
            img: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFByb2plY3QlMjBNYW5hZ2VtZW50JTIwJTI2JTIwRXhlY3V0aW9ufGVufDB8fDB8fHww",
          },
        ].map((srv, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`flex flex-col ${i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
          >
            <div className="md:w-1/2 w-full">
              <div className="rounded-3xl overflow-hidden h-[400px]">
                <img
                  src={srv.img}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  alt={srv.title}
                />
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl font-semibold">{srv.title}</h2>
              <p className="text-gray-600 text-lg">{srv.desc}</p>

              <ul className="flex flex-col gap-3 mb-2">
                {srv.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-[#132A13]"></div>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="w-fit mt-4 border-b-2 border-[#132A13] pb-1 font-medium hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                Discuss your project
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
