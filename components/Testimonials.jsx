// // "use client";
// import { ArrowLeft, ArrowRight, Star } from "lucide-react";
// import React, { useRef, useEffect } from "react";
// export default function Testimonials() {
//   const scrollRef = useRef(null);

//  const scroll = (direction) => {
//   const slider = scrollRef.current;
//   if (!slider) return;
//   const cards = slider.children;

//   let closestIndex = 0;
//   let closestDistance = Infinity;
//   // Find the card closest to center
//   Array.from(cards).forEach((card, i) => {
//     const cardCenter =
//       card.offsetLeft - slider.offsetWidth / 2 + card.offsetWidth / 2;
//     const distance = Math.abs(slider.scrollLeft - cardCenter);
//     if (distance < closestDistance) {
//       closestDistance = distance;
//       closestIndex = i;
//     }
//   });

//   if (direction === "left") closestIndex = Math.max(0, closestIndex - 1);
//   else closestIndex = Math.min(cards.length - 1, closestIndex + 1);

//   const card = cards[closestIndex];
//   const cardCenter =
//     card.offsetLeft - slider.offsetWidth / 2 + card.offsetWidth / 2;
//   slider.scrollTo({ left: cardCenter, behavior: "smooth" });
// };
// useEffect(() => {
//   const slider = scrollRef.current;
//   if (!slider) return;

//   let currentIndex = 0;
//   const cards = slider.children;
//   const totalCards = cards.length;

//   const autoScroll = setInterval(() => {
//     if (!cards[currentIndex]) return;

//     const card = cards[currentIndex];
//     // Calculate the center position
//     const cardCenter =
//       card.offsetLeft - slider.offsetWidth / 2 + card.offsetWidth / 2;

//     slider.scrollTo({ left: cardCenter, behavior: "smooth" });

//     currentIndex = (currentIndex + 1) % totalCards;
//   }, 3000);

//   return () => clearInterval(autoScroll);
// }, []);

//     return () => clearInterval(autoScroll);
//   }, []);
//   const testimonials = [
//     {
//       quote:
//         "JS Interiors made our new home look like a palace. Their attention to detail and execution were simply amazing.",
//       name: "Jitendra Suthar",
//       title: "Homeowner, Mumbai",
//       img: "/IMG_8905.JPG",
//     },

//     {
//       quote:
//         "Everyone loved the design of our startup office. The space planning and lighting work is absolutely perfect.",
//       name: "Rahul Verma",
//       title: "Founder, TechNova",
//       img: "/IMG_8905.JPG",
//     },
//     {
//       quote:
//         "Delivering such a premium look while staying within budget is truly their talent. Highly recommended for interior works!",
//       name: "Arvind Kumar",
//       title: "Homeowner, Delhi",
//       img: "/IMG_8905.JPG",
//     },
//     {
//       quote:
//         "From concept to completion, the team was highly professional. They transformed our space beyond our expectations.",
//       name: "Vikram Singh",
//       title: "Homeowner, Pune",
//       img: "/IMG_8905.JPG",
//     },
//     {
//       quote:
//         "The bespoke furniture and lighting completely elevated the mood of our home. We keep getting compliments.",
//       name: "Ramesh Desai",
//       title: "Villa Owner, Goa",
//       img: "/IMG_8905.JPG",
//     },
//   ];

//   return (
//     <section className="py-20 w-full max-w-7xl mx-auto px-6 overflow-visible relative group">
//       <div className="flex flex-col items-center text-center mb-16">
//         <span className="px-5 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700 mb-4">
//           Testimonials
//         </span>
//         <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#132A13] mb-6">
//           What our clients say
//         </h2>
//         <p className="text-gray-600 text-lg max-w-2xl">
//           Building a home is a long-term commitment so we're building lasting
//           relationships to match.
//         </p>
//       </div>

//       <div className="relative">
//         {/* Navigation Arrow - Left (Desktop only typically) */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white shadow-lg border border-gray-100 hover:bg-gray-50 transition-all text-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-50"
//           aria-label="Scroll Left"
//         >
//           <ArrowLeft size={24} />
//         </button>

//         {/* Updated Slider Container */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
//         >
//           {testimonials.map((item, i) => (
//             <div
//               key={i}
//               className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center bg-[#f6f7f6] p-8 md:p-10 rounded-2xl flex flex-col justify-between transition-transform"
//             >
//               <div>
//                 <div className="flex gap-1 mb-6 text-[#132A13]">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <Star
//                       key={star}
//                       size={20}
//                       fill="currentColor"
//                       strokeWidth={0}
//                     />
//                   ))}
//                 </div>
//                 <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10">
//                   "{item.quote}"
//                 </p>
//               </div>

//               <div className="flex items-center gap-4">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-12 h-12 rounded-full object-cover shadow-sm grayscale hover:grayscale-0 transition-all duration-300"
//                 />
//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg text-[#132A13]">
//                     {item.name}
//                   </h4>
//                   <p className="text-sm text-gray-500">{item.title}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Arrow - Right */}
//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white shadow-lg border border-gray-100 hover:bg-gray-50 transition-all text-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-50"
//           aria-label="Scroll Right"
//         >
//           <ArrowRight size={24} />
//         </button>
//       </div>
//     </section>
//   );
// }
// "use client";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import React, { useRef, useEffect } from "react";

export default function Testimonials() {
  const scrollRef = useRef(null);

  // Scroll function for left/right buttons
  const scroll = (direction) => {
    const slider = scrollRef.current;
    if (!slider) return;
    const cards = slider.children;

    let closestIndex = 0;
    let closestDistance = Infinity;

    // Find card closest to current center
    Array.from(cards).forEach((card, i) => {
      const cardCenter =
        card.offsetLeft - slider.offsetWidth / 2 + card.offsetWidth / 2;
      const distance = Math.abs(slider.scrollLeft - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    if (direction === "left") closestIndex = Math.max(0, closestIndex - 1);
    else closestIndex = Math.min(cards.length - 1, closestIndex + 1);

    const card = cards[closestIndex];
    const cardCenter =
      card.offsetLeft - slider.offsetWidth / 2 + card.offsetWidth / 2;
    slider.scrollTo({ left: cardCenter, behavior: "smooth" });
  };

  // Auto-scroll effect
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const cards = slider.children;
    let currentIndex = 0;

    const autoScroll = setInterval(() => {
      if (!cards[currentIndex]) return;

      const card = cards[currentIndex];
      const cardCenter =
        card.offsetLeft - slider.offsetWidth / 2 + card.offsetWidth / 2;

      slider.scrollTo({ left: cardCenter, behavior: "smooth" });

      currentIndex = (currentIndex + 1) % cards.length;
    }, 3000);

    return () => clearInterval(autoScroll);
  }, []);

  const testimonials = [
    {
      quote:
        "JS Interiors made our new home look like a palace. Their attention to detail and execution were simply amazing.",
      name: "Jitendra Suthar",
      title: "Homeowner, Mumbai",
      img: "/IMG_8905.JPG",
    },
    {
      quote:
        "Everyone loved the design of our startup office. The space planning and lighting work is absolutely perfect.",
      name: "Rahul Verma",
      title: "Founder, TechNova",
      img: "/IMG_8905.JPG",
    },
    {
      quote:
        "Delivering such a premium look while staying within budget is truly their talent. Highly recommended for interior works!",
      name: "Arvind Kumar",
      title: "Homeowner, Delhi",
      img: "/IMG_8905.JPG",
    },
    {
      quote:
        "From concept to completion, the team was highly professional. They transformed our space beyond our expectations.",
      name: "Vikram Singh",
      title: "Homeowner, Pune",
      img: "/IMG_8905.JPG",
    },
    {
      quote:
        "The bespoke furniture and lighting completely elevated the mood of our home. We keep getting compliments.",
      name: "Ramesh Desai",
      title: "Villa Owner, Goa",
      img: "/IMG_8905.JPG",
    },
  ];

  return (
    <section className="py-20 w-full max-w-7xl mx-auto px-6 overflow-visible relative group">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="px-5 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700 mb-4">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#132A13] mb-6">
          What our clients say
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl">
          Building a home is a long-term commitment so we're building lasting
          relationships to match.
        </p>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white shadow-lg border border-gray-100 hover:bg-gray-50 transition-all text-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-50"
          aria-label="Scroll Left"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center bg-[#f6f7f6] p-8 md:p-10 rounded-2xl flex flex-col justify-between transition-transform"
            >
              <div>
                <div className="flex gap-1 mb-6 text-[#132A13]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover shadow-sm grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-[#132A13]">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white shadow-lg border border-gray-100 hover:bg-gray-50 transition-all text-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-50"
          aria-label="Scroll Right"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
}
