// "use client";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import { useRef, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { Mail, Phone, MapPin } from "lucide-react";

// export default function Contact() {
//   const formRef = useRef();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     if (isSubmitting) return;

//     setIsSubmitting(true);
//     const toastId = toast.loading("Sending your message...");

//     const sendRequest = () =>
//       emailjs.sendForm("service_yh5gznc", "template_aa6vn4r", formRef.current, {
//         publicKey: "d0D0yVwnwK4bBx3-I",
//       });

//     try {
//       await sendRequest();
//       toast.success("Message sent successfully ✅", { id: toastId });
//       formRef.current.reset();
//     } catch (err) {
//       console.log("Error:", err);
//       try {
//         await new Promise((res) => setTimeout(res, 2000));
//         await sendRequest();
//         toast.success("Message sent successfully ✅", { id: toastId });
//         formRef.current.reset();
//       } catch (error) {
//         toast.error("Network issue 😢 Please try again.", { id: toastId });
//       }
//     }
//     setIsSubmitting(false);
//   };

//   return (
//     <div className="w-full pt-32 pb-24 max-w-7xl mx-auto px-6 relative">
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           style: {
//             background: "#132A13",
//             color: "#fff",
//             borderRadius: "12px",
//             padding: "16px",
//           },
//         }}
//       />

//       <div className="flex flex-col md:flex-row gap-16 items-start">
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="md:w-1/2 w-full"
//         >
//           <span className="text-sm font-medium text-gray-500 mb-4 block uppercase tracking-widest">
//             Contact us
//           </span>
//           <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#132A13] mb-6 leading-tight">
//             Let's talk about your project
//           </h1>
//           <p className="text-gray-600 text-lg mb-10">
//             Fill out the form below to discuss the design of your new home or
//             office. Our design team will get in touch with you within 24 hours.
//           </p>

//           {/* Desktop Only Contact Details (Hidden on Mobile) */}
//           <div className="hidden md:flex flex-col gap-6">
//             <ContactInfo />
//           </div>
//         </motion.div>

//         {/* --- RIGHT SIDE: FORM & MOBILE CONTACT INFO --- */}
//         <div className="w-full md:w-1/2">
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-[#132A13] rounded-3xl p-8 md:p-12 w-full text-white shadow-2xl"
//           >
//             <form
//               ref={formRef}
//               onSubmit={sendEmail}
//               className="flex flex-col gap-6"
//             >
//               <div>
//                 <label className="block text-sm mb-2 opacity-80 font-medium">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   placeholder="Your Name"
//                   className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm mb-2 opacity-80 font-medium">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   placeholder="your@email.com"
//                   className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm mb-2 opacity-80 font-medium">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   required
//                   placeholder="+91 98765 43210"
//                   className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm mb-2 opacity-80 font-medium">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   required
//                   rows="4"
//                   placeholder="Tell us about your project..."
//                   className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white resize-none focus:outline-none focus:border-white/50 transition-colors"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`bg-white text-[#132A13] px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
//                   isSubmitting
//                     ? "opacity-70 cursor-not-allowed"
//                     : "hover:bg-gray-100 hover:scale-[1.02] active:scale-95"
//                 }`}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </button>
//             </form>
//           </motion.div>

//           {/* Mobile Only Contact Details (Hidden on Desktop) */}
//           <div className="flex md:hidden flex-col gap-6 mt-12 px-2">
//             <div className="w-12 h-1 bg-[#132A13]/20 rounded-full mb-2" />
//             <ContactInfo />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Reusable Contact Info Component
// function ContactInfo() {
//   return (
//     <>
//       <div className="flex items-center gap-4 group">
//         <div className="p-3 bg-gray-100 rounded-lg text-[#132A13]">
//           <Mail size={20} />
//         </div>
//         <div>
//           <p className="text-xs text-gray-500 uppercase font-bold">Email us</p>
//           <p className="text-[#132A13] font-medium">hello@yourdomain.com</p>
//         </div>
//       </div>

//       <div className="flex items-center gap-4 group">
//         <div className="p-3 bg-gray-100 rounded-lg text-[#132A13]">
//           <Phone size={20} />
//         </div>
//         <div>
//           <p className="text-xs text-gray-500 uppercase font-bold">Call us</p>
//           <p className="text-[#132A13] font-medium">+91 98765 43210</p>
//         </div>
//       </div>

//       <div className="flex items-center gap-4 group">
//         <div className="p-3 bg-gray-100 rounded-lg text-[#132A13]">
//           <MapPin size={20} />
//         </div>
//         <div>
//           <p className="text-xs text-gray-500 uppercase font-bold">Visit us</p>
//           <p className="text-[#132A13] font-medium leading-tight">
//             123 Design Street, Creative Block,
//             <br />
//             Mumbai, Maharashtra 400001
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    const sendRequest = () =>
      emailjs.sendForm("service_yh5gznc", "template_aa6vn4r", formRef.current, {
        publicKey: "d0D0yVwnwK4bBx3-I",
      });

    try {
      await sendRequest();
      toast.success("Message sent successfully ✅", { id: toastId });
      formRef.current.reset();
    } catch (err) {
      console.log("Error:", err);
      toast.error("Network issue 😢 Please try again.", { id: toastId });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#fafaf9] selection:bg-[#132A13] selection:text-white">
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#132A13]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#132A13]/10 blur-[120px]" />
      </div>

      <Toaster position="bottom-center" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT SIDE: CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-[#132A13] text-white rounded-full"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#132A13] text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4F772D] animate-pulse" />
                Get In Touch
              </div>
            </motion.span>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#132A13] mb-8 leading-[0.9]">
              Let's create <br />
              <span className="text-gray-400 italic font-light">magic.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-md leading-relaxed">
              Have a vision? We have the expertise. Drop us a message and let's
              start building your dream space.
            </p>

            <div className="space-y-8">
              <ContactDetail
                icon={<Mail size={22} />}
                label="Email us"
                value="hello@yourdomain.com"
              />
              <ContactDetail
                icon={<Phone size={22} />}
                label="Call us"
                value="+91 98765 43210"
              />
              <ContactDetail
                icon={<MapPin size={22} />}
                label="Visit us"
                value="123 Design Street, Mumbai, MH"
              />
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: PREMIUM FORM --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#132A13] rounded-[40px] rotate-2 scale-105 opacity-5 -z-10" />

            <div className="bg-white border border-gray-100 shadow-[0_32px_64px_-16px_rgba(19,42,19,0.1)] rounded-[40px] p-8 md:p-12">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                  />
                  <FloatingInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <FloatingInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 00000 00000"
                />

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-[#132A13] focus:ring-2 focus:ring-[#132A13]/20 transition-all outline-none resize-none"
                    placeholder="Tell us about your project goals..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-[#132A13] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 group transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <ArrowRight
                        className="group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Sub-component for Inputs
function FloatingInput({ label, name, type, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-[#132A13] focus:ring-2 focus:ring-[#132A13]/20 transition-all outline-none"
      />
    </div>
  );
}

// Sub-component for Contact Details
function ContactDetail({ icon, label, value }) {
  return (
    <div className="flex items-center gap-5 group cursor-pointer">
      <div className="w-12 h-12 flex items-center justify-center bg-white border border-gray-100 shadow-sm rounded-2xl text-[#132A13] group-hover:bg-[#132A13] group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-0.5">
          {label}
        </p>
        <p className="text-[#132A13] font-semibold text-lg">{value}</p>
      </div>
    </div>
  );
}
