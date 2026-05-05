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
      img: "data:image/jpeg;base64,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",
    },
    {
      quote:
        "Delivering such a premium look while staying within budget is truly their talent. Highly recommended for interior works!",
      name: "Arvind Kumar",
      title: "Homeowner, Delhi",
      img: "data:image/jpeg;base64,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",
    },
    {
      quote:
        "From concept to completion, the team was highly professional. They transformed our space beyond our expectations.",
      name: "Vikram Singh",
      title: "Homeowner, Pune",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxvh4ZHvkIQc6tfWouaWJHvdMZiCS4_o2Eg&s",
    },
    {
      quote:
        "The bespoke furniture and lighting completely elevated the mood of our home. We keep getting compliments.",
      name: "Ramesh Desai",
      title: "Villa Owner, Goa",
      img: "data:image/jpeg;base64,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",
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
