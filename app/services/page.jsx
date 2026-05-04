"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react"; // install lucide-react if not present

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const services = [
  {
    number: "01",
    title: "Space Planning & Layout",
    desc: "We create smart and functional layouts to maximize the use of your space. Utilizing every square inch perfectly is our specialty.",
    features: ["2D Floor Plans", "3D Visualization", "Ergonomic Layouts"],
    img: "https://media.istockphoto.com/id/2193767201/photo/family-makes-an-agreement-with-a-worker-doing-renovations-in-the-apartment.webp?a=1&b=1&s=612x612&w=0&k=20&c=LP3YSxVb68fg15_AgrHcIKXjjMEAgB4IymAcaYIAKAY=",
    color: "bg-[#f4f7f4]",
  },
  {
    number: "02",
    title: "Custom Furniture Design",
    desc: "Bespoke furniture that matches your aesthetic style and fits perfectly in your space. We only use high-quality, durable materials.",
    features: ["Material Selection", "Premium Finish", "Modular Kitchens"],
    img: "https://media.istockphoto.com/id/1061173208/photo/young-carpenter-using-sander-while-working-on-a-piece-of-wood.webp?a=1&b=1&s=612x612&w=0&k=20&c=1RsjX0YSceJPpaPg1PPhOQk-3s8_ITgniz7YTqYC3Qo=",
    color: "bg-[#fdfbf7]",
  },
  {
    number: "03",
    title: "Project Management",
    desc: "We give you a chance to relax while our team supervises and executes every task on-site. We guarantee on-time delivery with no compromises.",
    features: [
      "Contractor Coordination",
      "Quality Control",
      "On-time Delivery",
    ],
    img: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFByb2plY3QlMjBNYW5hZ2VtZW50JTIwJTI2JTIwRXhlY3V0aW9ufGVufDB8fDB8fHww",
    color: "bg-[#f8f9fa]",
  },
];

export default function Services() {
  return (
    <div className="w-full pt-32 pb-24 max-w-7xl mx-auto px-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-32"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#132A13] text-xs font-bold uppercase tracking-[0.2em] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#4F772D] animate-pulse" />
          Excellence in Design
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#132A13] mb-8 leading-[1.1]">
          To turn your vision into{" "}
          <span className="text-gray-400 italic font-light text-4xl md:text-6xl block">
            reality
          </span>
        </h1>
        <p className="text-gray-500 text-lg">
          From initial sketches to the final touch, we manage every detail.
        </p>
      </motion.div>

      {/* Services List */}
      <div className="flex flex-col gap-32 md:gap-40">
        {services.map((srv, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className={`flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 lg:gap-24 items-center`}
          >
            {/* Image Side with Decorative Background */}

            <div className="lg:w-1/2 w-full relative group">
              {/* Decorative Background */}
              <div
                className={`absolute -inset-4 ${srv.color} rounded-[2rem] -z-10 group-hover:inset-0 transition-all duration-500`}
              />

              {/* Image Container: Height ko h-[320px] ya aspect-video rakha hai */}
              <div className="rounded-[2rem] overflow-hidden h-[320px] md:h-[350px] shadow-2xl relative">
                <img
                  src={srv.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                  alt={srv.title}
                />

                {/* Overlay taaki image aur clean lage (Optional) */}
                <div className="absolute inset-0 bg-[#132A13]/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Floating Number Card: Size thoda chota kiya height ke hisaab se */}
              <div className="absolute -bottom-4 -right-4 bg-white py-3 px-5 rounded-xl shadow-lg hidden md:block border border-gray-100">
                <span className="text-2xl font-serif italic text-[#132A13]">
                  {srv.number}
                </span>
              </div>
            </div>
            {/* Content Side */}
            <div className="lg:w-1/2 flex flex-col items-start text-left">
              <span className="text-[#4F772D] font-mono text-lg mb-4 tracking-tighter">
                / {srv.number}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#132A13] mb-6 leading-tight">
                {srv.title}
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                {srv.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
                {srv.features.map((feat, j) => (
                  <div key={j} className="flex items-center gap-3 group/feat">
                    <div className="w-8 h-[1px] bg-gray-300 group-hover/feat:w-12 group-hover/feat:bg-[#4F772D] transition-all duration-300"></div>
                    <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#132A13] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1a3a1a] transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95"
              >
                Discuss your project
                <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
