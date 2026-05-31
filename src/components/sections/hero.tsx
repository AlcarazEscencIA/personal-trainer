"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Marquee from "../ui/marquee";

export default function Hero() {
  const marqueeWords = ["ABRIL PETRUZZO", "ABRIL PETRUZZO"];

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full bg-slate-blue overflow-hidden flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6"
    >
      {/* Decorative High-End Reticle Overlay (Architectural Technical Lines) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
      <div className="absolute top-0 left-12 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />
      <div className="absolute top-0 right-12 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />

      {/* INFINITE TEXT SCROLLING LAYER (Middle Depth - Layer 1) */}
      <div className="absolute inset-y-0 inset-x-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-full relative">
          <Marquee
            words={marqueeWords}
            showSeparator={false}
            speed={75}
            textClassName="bg-gradient-to-b from-white via-white/85 to-zinc-400 bg-clip-text text-transparent opacity-55 text-[12vw] tracking-tighter font-black font-display"
          />
        </div>
      </div>

      {/* FOREGROUND TRAINER SILHOUETTE IMAGE (Top Depth - Layer 2) */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-7xl flex items-end justify-center pointer-events-none z-20 select-none">
        
        <div className="relative inline-flex items-end justify-center">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/reformer_hero.png"
              alt="Abril Petruzzo Pilates Coach Reformer"
              width={1200}
              height={1600}
              priority
              className="h-[75vh] md:h-[85vh] lg:h-[95vh] w-auto max-w-full object-contain object-bottom filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
            />
          </motion.div>

          {/* Floating Badge — desktop: anchored to left edge of image; mobile: hidden */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="
              absolute z-30 pointer-events-auto
              bg-obsidian/95 backdrop-blur-md border border-gold-accent shadow-2xl
              hidden md:flex items-center
              md:bottom-[27%] md:left-0 md:-translate-x-[97%] md:px-6 md:py-4 md:space-x-3
            "
          >
            <span className="font-mono text-[10px] md:text-xs text-gold-accent font-bold">//</span>
            <span className="font-display font-black text-[9px] md:text-sm text-white tracking-[0.15em] md:tracking-[0.25em] uppercase whitespace-nowrap">
              ENTRENADORA PERSONAL
            </span>
          </motion.div>
        </div>

      </div>

      {/* Mobile Top Header (replaces the badge on mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden relative z-30 flex flex-col items-center pt-2 pb-6"
      >
        <span className="font-mono text-[9px] text-gold-accent font-bold tracking-[0.3em] uppercase mb-3">
          // ABRIL PETRUZZO
        </span>
        <h1 className="font-display font-black text-white text-3xl sm:text-4xl uppercase tracking-[0.15em] leading-none text-center">
          ENTRENADORA<br/>
          <span className="text-gold-accent font-light italic tracking-[0.1em] mt-1 block">
            PERSONAL
          </span>
        </h1>
      </motion.div>

      {/* Spacer to push elements and keep scroll-smooth indicators layout perfect */}
      <div className="flex-grow z-30 relative" />

      {/* Bottom Row / Scroll Indicator (Layer 3) */}
      <div className="max-w-7xl mx-auto w-full z-30 flex justify-between items-center text-[9px] sm:text-[10px] font-mono text-white/50 tracking-wider">
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline">// EXCLUSIVIDAD GARANTIZADA</span>
          <span className="hidden md:inline">•</span>
          <span>BUENOS AIRES &amp; ONLINE</span>
        </div>
        <a
          href="#filosofia"
          className="flex items-center space-x-2 text-white/70 hover:text-gold-accent transition-colors py-3 min-h-[44px]"
        >
          <span>DESCUBRIR MÁS</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ArrowDown size={12} />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
