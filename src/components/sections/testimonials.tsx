"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Heart, MessageCircle, Bookmark } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { SectionTitle } from "@/components/ui/section-title";

// Custom Instagram SVG (not available in this lucide-react version)
function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const INSTAGRAM_URL = "https://www.instagram.com/abii.fiitness/";

const posts = [
  { src: "/images/ig_post1.png", alt: "Entrenamiento en el gym",            href: "https://www.instagram.com/p/DWKWGpBhtD9/", likes: "1.2k", comments: "48" },
  { src: "/images/ig_post2.png", alt: "Entrenadora Personal Abril",          href: "https://www.instagram.com/p/DXsGoVMknai/", likes: "987",  comments: "33" },
  { src: "/images/ig_post3.png", alt: "Sesión de entrenamiento",             href: "https://www.instagram.com/p/DXhvAvxEib_/", likes: "1.4k", comments: "61" },
  { src: "/images/ig_post4.png", alt: "Pull-up en el gym",                   href: "https://www.instagram.com/p/DXxUrPIyYv2/", likes: "2.1k", comments: "89" },
  { src: "/images/ig_post5.png", alt: "Si no te permitis ser principiante",  href: "https://www.instagram.com/p/DORm3znARvj/", likes: "876",  comments: "27" },
  { src: "/images/ig_post6.png", alt: "Hip thrust en el gym",                href: "https://www.instagram.com/p/DXNLAqnEpx1/", likes: "1.8k", comments: "54" },
];

const stats = [
  { value: "2K+",  label: "Seguidores"   },
  { value: "200+", label: "Publicaciones" },
  { value: "100%", label: "Contenido real" },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative bg-charcoal py-16 md:py-24 lg:py-32 px-6 overflow-hidden border-t border-zinc-900"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ee2a7b]/4 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-accent/4 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-center space-y-4 mb-16 text-center"
        >
          <SectionBadge className="justify-center mb-0">// SEGUINOS EN REDES</SectionBadge>

          <SectionTitle
            title="SEGUIME EN"
            subtitle="INSTAGRAM"
            className="text-4xl md:text-6xl"
          />

          <p className="text-zinc-400 text-sm max-w-md mx-auto font-light leading-relaxed pt-2">
            Contenido real sobre entrenamiento, alimentación y transformación. Todo lo que no te muestra el gimnasio tradicional.
          </p>
        </motion.div>

        {/* Main layout: profile left, grid right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── LEFT: Profile card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-8"
          >
            {/* Avatar + name */}
            <div className="flex items-center space-x-4">
              <div
                className="w-20 h-20 rounded-full flex-shrink-0 p-[2px]"
                style={{ background: "linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)" }}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-charcoal">
                  <Image
                    src="/images/abril.jpg"
                    alt="Abril Petruzzo Instagram"
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <p className="font-display font-black text-white text-lg uppercase tracking-tight">
                  abii.fiitness
                </p>
                <p className="text-zinc-500 text-xs font-light mt-0.5">Entrenadora Personal</p>
                <p className="text-zinc-500 text-xs font-light">📍 Buenos Aires, Argentina</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex items-center space-x-4 w-full">
              {stats.map((stat, i) => (
                <div key={i} className="text-center flex-1">
                  <p className="font-display font-black text-white text-lg sm:text-xl">{stat.value}</p>
                  <p className="font-mono text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Bio */}
            <p className="text-zinc-300 text-sm leading-relaxed font-light text-center lg:text-left">
              Transformación física y mental con método real.
              <br />
              <span className="text-zinc-500">Planes personalizados · Alimentación · Disciplina.</span>
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-zinc-800" />

            {/* Main CTA button */}
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group w-full inline-flex items-center justify-center space-x-3 px-4 sm:px-8 py-4 min-h-[52px] font-display font-bold text-[11px] uppercase tracking-widest text-white shadow-2xl relative overflow-hidden"
              style={{ background: "linear-gradient(90deg, #f9ce34, #ee2a7b, #6228d7)" }}
            >
              <InstagramIcon size={16} />
              <span>IR A INSTAGRAM</span>
              <ExternalLink size={12} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <p className="font-mono text-[10px] text-zinc-600 tracking-widest self-center lg:self-start">
              @abii.fiitness
            </p>
          </motion.div>

          {/* ── RIGHT: Faux post grid ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-2"
          >
            {posts.map((post, idx) => (
              <motion.a
                key={idx}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * idx, ease }}
                whileHover={{ zIndex: 10 }}
                className="relative aspect-square overflow-hidden border border-zinc-900 hover:border-gold-accent/30 group cursor-pointer block"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 250px"
                  className="object-cover object-top filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-obsidian/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-2">
                  <InstagramIcon size={22} className="text-white drop-shadow-lg" />
                  <div className="flex items-center space-x-4 text-white text-xs font-mono">
                    <span className="flex items-center space-x-1">
                      <Heart size={11} className="fill-white" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MessageCircle size={11} />
                      <span>{post.comments}</span>
                    </span>
                  </div>
                </div>

                {/* Always-visible bookmark corner */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Bookmark size={14} className="text-white/80" />
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-900 pt-10"
        >
          <p className="text-zinc-500 text-xs font-light text-center sm:text-left">
            Contenido nuevo cada semana · Seguí el proceso en tiempo real
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 font-mono text-[10px] tracking-widest uppercase text-gold-accent hover:text-white transition-colors"
          >
            <span>@abii.fiitness</span>
            <ExternalLink size={11} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
