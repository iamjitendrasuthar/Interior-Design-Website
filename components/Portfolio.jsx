"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(
          collection(db, "portfolio"),
          orderBy("createdAt", "desc"),
          limit(3), // sirf 3 latest projects
        );
        const snap = await getDocs(q);
        setProjects(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch (e) {
        console.error("Fetch error:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="bg-gray-50 py-20 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-[#132A13]">
            Our latest projects
          </h2>
          <Link
            href="/portfolio"
            className="hidden md:flex items-center gap-2 font-medium hover:text-gray-600 transition-colors"
          >
            View all projects <ArrowRight size={18} />
          </Link>
        </div>

        {loading ? (
          // Skeleton loading
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="rounded-3xl bg-gray-200 h-64 mb-6" />
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-3" />
                <div className="h-6 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="group cursor-pointer"
                >
                  <div className="rounded-3xl overflow-hidden h-64 mb-6 relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={20} className="text-[#132A13]" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-gray-200 px-3 py-1 rounded-full text-[#132A13] font-medium">
                      {project.tag}
                    </span>
                    {project.createdAt?.toDate && (
                      <span>
                        {project.createdAt
                          .toDate()
                          .toLocaleDateString("en-IN", {
                            month: "short",
                            year: "numeric",
                          })}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-[#132A13] group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
