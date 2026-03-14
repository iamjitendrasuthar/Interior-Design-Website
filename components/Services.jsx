"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="md:sticky md:top-32 h-fit"
        >
          <span className="px-5 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700 mb-6">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#132A13] mb-6 leading-tight mt-4 ">
            Our expertise for every space
          </h2>
          <p className="text-gray-600 text-lg">
            We are experts in designing residential and commercial spaces. From
            concept to final execution, we stand by you at every step to make
            your vision come true.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {[
            {
              title: "Residential Interior Design",
              desc: "Every corner of your home will tell your story. From the living room to the bedroom, perfect aesthetics tailored for you.",
              img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
            },
            {
              title: "Commercial & Office Spaces",
              desc: "Workspaces that boost productivity and build a brand image that impresses your clients instantly.",
              img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            },
            {
              title: "Custom Furniture & Styling",
              desc: "The perfect combination of bespoke furniture, lighting, and decor customized to your space and personal style.",
              img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#132A13]">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <div className="rounded-3xl overflow-hidden h-80">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
