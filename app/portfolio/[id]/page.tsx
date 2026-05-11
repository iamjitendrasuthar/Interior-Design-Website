"use client";
import { use, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import CTA from "@/components/CTA";

export default function ProjectDetail({ params }) {
  const resolvedParams = use(params);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProject = async () => {
      console.log("Fetching ID:", resolvedParams.id); // ← console mein ID dekho
      try {
        const docRef = doc(db, "portfolio", resolvedParams.id);
        const docSnap = await getDoc(docRef);
        console.log("Doc exists:", docSnap.exists()); // ← true/false aayega
        if (docSnap.exists()) {
          setProject({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Document nahi mila. ID: " + resolvedParams.id);
        }
      } catch (e) {
        console.error("Error:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [resolvedParams.id]);

  if (loading)
    return (
      <div className="w-full pt-48 flex flex-col items-center justify-center gap-4">
        <div className="w-8 h-8 border-2 border-[#132A13] border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    );

  // Error screen - ID bhi dikhao
  if (error || !project)
    return (
      <div className="w-full pt-48 text-center px-6">
        <p className="text-red-500 text-lg mb-2">Project nahi mila</p>
        <p className="text-gray-400 text-sm mb-2">
          URL ID:{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">
            {resolvedParams.id}
          </code>
        </p>
        <p className="text-gray-400 text-sm mb-6">{error}</p>
        <button
          onClick={() => router.back()}
          className="text-[#132A13] underline"
        >
          ← Wapas jao
        </button>
      </div>
    );

  const category = project.category || project.tag || "—";
  const heroImg = project.heroImg || project.img || "";

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1,
    );
  };
  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1,
    );
  };

  return (
    <div className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Projects
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4 text-[#132A13] font-medium uppercase tracking-tighter">
            <span className="w-10 h-[1px] bg-[#132A13]"></span>
            {category}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 text-[#132A13]">
            {project.title}
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-sm"
          >
            <img
              src={heroImg}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="md:col-span-1 flex flex-col gap-6 p-8 bg-[#f8f9f8] rounded-3xl h-fit">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Client</p>
              <p className="text-lg font-semibold text-[#132A13]">
                {project.client || "—"}
              </p>
            </div>
            <div className="w-full h-px bg-gray-200"></div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Category</p>
              <p className="text-lg font-semibold text-[#132A13]">{category}</p>
            </div>
            <div className="w-full h-px bg-gray-200"></div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Timeline</p>
              <p className="text-lg font-semibold text-[#132A13]">
                {project.timeline || "—"}
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-3xl font-semibold mb-6 text-[#132A13]">
              Project Overview
            </h3>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {project.overview}
            </p>
            {project.features?.length > 0 && (
              <>
                <h3 className="text-2xl font-semibold mb-6 text-[#132A13]">
                  What we did
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-[#132A13] mt-1 shrink-0"
                        size={20}
                      />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {project.gallery?.length > 0 && (
          <div className="mb-24">
            <h3 className="text-3xl font-semibold mb-8 text-[#132A13]">
              Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {project.gallery.map((imgUrl, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setActiveIndex(idx)}
                  className="rounded-2xl overflow-hidden h-64 cursor-pointer group shadow-sm"
                >
                  <img
                    src={imgUrl}
                    alt={`Gallery ${idx}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Slider */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(8px)",
            }}
            onClick={() => setActiveIndex(null)}
          >
            {/* Image */}
            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={project.gallery[activeIndex]}
              style={{
                maxWidth: "85vw",
                maxHeight: "85vh",
                width: "85vw",
                height: "85vw",
                objectFit: "cover",
                borderRadius: 16,
              }}
              onClick={(e) => e.stopPropagation()}
              alt={`Slide ${activeIndex}`}
            />

            {/* CLOSE */}
            <button
              style={{ position: "fixed", top: 20, right: 20, zIndex: 10000 }}
              className="bg-white/15 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(null);
              }}
            >
              <X size={22} />
            </button>

            {/* PREV */}
            <button
              style={{
                position: "fixed",
                left: 20,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10000,
              }}
              className="bg-white/15 hover:bg-white/30 rounded-full p-3 text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev(e);
              }}
            >
              <ChevronLeft size={28} />
            </button>

            {/* NEXT */}
            <button
              style={{
                position: "fixed",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10000,
              }}
              className="bg-white/15 hover:bg-white/30 rounded-full p-3 text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleNext(e);
              }}
            >
              <ChevronRight size={28} />
            </button>

            {/* Counter */}
            <div
              style={{
                position: "fixed",
                bottom: 24,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10000,
              }}
              className="bg-black/50 text-white text-xs px-4 py-2 rounded-full"
            >
              {activeIndex + 1} / {project.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </div>
  );
}
