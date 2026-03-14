"use client";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="w-full pt-28">
      {/* Hero Section */}
      <Hero />
      {/* Services Section */}
      <Services />
      {/* Testimonials */}
      <Testimonials />
      {/* Projects/Portfolio */}
      <Portfolio />
      {/* Why Choose Us (Bento Grid) */}
      <WhyChooseUs />
      {/* FAQ Section */}
      <FAQ />
      {/* CTA Section */}
      <CTA />
    </div>
  );
}
