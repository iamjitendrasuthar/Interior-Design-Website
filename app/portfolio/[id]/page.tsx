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

// Skeleton component
function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] rounded-2xl ${className}`}
      style={{
        animation: "shimmer 1.5s infinite",
      }}
    />
  );
}

function ProjectSkeleton() {
  return (
    <div className="w-full pt-32 pb-24">
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6">
        {/* Back button skeleton */}
        <Skeleton className="h-4 w-36 mb-12 rounded-full" />

        {/* Category + Title */}
        <div className="mb-12">
          <Skeleton className="h-4 w-24 mb-4 rounded-full" />
          <Skeleton className="h-14 w-2/3 mb-4 rounded-2xl" />
          <Skeleton className="h-10 w-1/3 mb-12 rounded-2xl" />
          {/* Hero Image */}
          <Skeleton className="w-full h-[500px] md:h-[600px] rounded-3xl" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Left card */}
          <div className="md:col-span-1 flex flex-col gap-6 p-8 bg-[#f8f9f8] rounded-3xl">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <Skeleton className="h-3 w-16 mb-2 rounded-full" />
                <Skeleton className="h-6 w-32 rounded-xl" />
                {i < 3 && <div className="w-full h-px bg-gray-200 mt-6" />}
              </div>
            ))}
          </div>

          {/* Right content */}
          <div className="md:col-span-2">
            <Skeleton className="h-8 w-48 mb-6 rounded-xl" />
            <Skeleton className="h-4 w-full mb-3 rounded-full" />
            <Skeleton className="h-4 w-full mb-3 rounded-full" />
            <Skeleton className="h-4 w-4/5 mb-3 rounded-full" />
            <Skeleton className="h-4 w-3/4 mb-10 rounded-full" />

            <Skeleton className="h-7 w-36 mb-6 rounded-xl" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-5 w-full rounded-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-24">
          <Skeleton className="h-8 w-28 mb-8 rounded-xl" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Skeleton key={i} className="h-64 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetail({ params }) {
  const resolvedParams = use(params);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, "portfolio", resolvedParams.id);
        const docSnap = await getDoc(docRef);
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

  if (loading) return <ProjectSkeleton />;

  if (error || !project)
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center pt-40 pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 text-center"
        >
          <div className="w-20 h-20 bg-[#f8f9f8] rounded-3xl flex items-center justify-center mx-auto mb-8">
            <X size={32} className="text-[#132A13]/30" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#132A13] mb-4">
            Project Not Found
          </h2>

          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            The project you are looking for might have been removed or the link
            is incorrect.
          </p>

          <button
            onClick={() => router.push("/portfolio")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#132A13] text-white rounded-full hover:bg-[#132A13]/90 transition-all active:scale-95 shadow-lg shadow-black/10"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </button>
        </motion.div>
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

      {/* Lightbox */}
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
            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={project.gallery[activeIndex]}
              style={{
                maxWidth: "95vw",
                maxHeight: "80vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: 16,
              }}
              onClick={(e) => e.stopPropagation()}
              alt={`Slide ${activeIndex}`}
            />

            {/* CLOSE */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              style={{ position: "fixed", top: 24, right: 24, zIndex: 10000 }}
              className="group flex items-center justify-center w-12 h-12 rounded-2xl 
  bg-white/10 hover:bg-white/20 
  border border-white/20 hover:border-white/40
  backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]
  text-white transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(null);
              }}
            >
              <X
                size={22}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </motion.button>

            {/* PREV */}
            <motion.button
              whileHover={{ scale: 1.08, x: -2 }}
              whileTap={{ scale: 0.92 }}
              style={{
                position: "fixed",
                left: 24,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10000,
              }}
              className="group flex items-center justify-center w-14 h-14 rounded-2xl
  bg-gradient-to-br from-white/15 to-white/5
  hover:from-white/25 hover:to-white/10
  border border-white/20 hover:border-white/40
  backdrop-blur-xl
  shadow-[0_10px_40px_rgba(0,0,0,0.35)]
  text-white transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev(e);
              }}
            >
              <ChevronLeft
                size={30}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </motion.button>

            {/* NEXT */}
            <motion.button
              whileHover={{ scale: 1.08, x: 2 }}
              whileTap={{ scale: 0.92 }}
              style={{
                position: "fixed",
                right: 24,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10000,
              }}
              className="group flex items-center justify-center w-14 h-14 rounded-2xl
  bg-gradient-to-br from-white/15 to-white/5
  hover:from-white/25 hover:to-white/10
  border border-white/20 hover:border-white/40
  backdrop-blur-xl
  shadow-[0_10px_40px_rgba(0,0,0,0.35)]
  text-white transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                handleNext(e);
              }}
            >
              <ChevronRight
                size={30}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>

            {/* Counter */}
            <div
              style={{
                position: "fixed",
                bottom: 24,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10000,
              }}
              className="bg-black/50 border border-white/20 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm"
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
