import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/shared/navbar";
import Hero from "@/components/sections/hero";

// Lazy-loaded components for better performance
const About = dynamic(() => import("@/components/sections/about"));
const Benefits = dynamic(() => import("@/components/sections/benefits"));
const Services = dynamic(() => import("@/components/sections/services"));
const BeforeAfter = dynamic(() => import("@/components/sections/before-after"));
const Testimonials = dynamic(() => import("@/components/sections/testimonials"));
const Contact = dynamic(() => import("@/components/sections/contact"));
const Footer = dynamic(() => import("@/components/sections/footer"));

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Structural Layout */}
      <main className="flex-grow">
        {/* Section 1: Cinematic Hero */}
        <Hero />

        {/* Section 2: Personal Presentation & Philosophy */}
        <About />

        {/* Section 3: Benefits & Studio Collage */}
        <Benefits />

        {/* Section 4: Programs & Services Accordion */}
        <Services />

        {/* Section 5: Transformations & Drag Comparison */}
        <BeforeAfter />

        {/* Section 7: Editorial High-Status Testimonials */}
        <Testimonials />

        {/* Section 8: Lead Capture Admission Form */}
        <Contact />
      </main>

      {/* Footnote Editorial Branding */}
      <Footer />
    </>
  );
}
