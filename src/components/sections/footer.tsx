"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/abii.fiitness/";
const WHATSAPP_NUMBER = "5491153421103";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-obsidian text-zinc-500 pt-12 md:pt-20 pb-8 px-6 border-t border-zinc-900 overflow-hidden">

      {/* Decorative Blur Background Lights */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-slate-blue/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-16 border-b border-zinc-900 text-center md:text-left">

          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6 flex flex-col items-center md:items-start">
            <span className="font-display font-black text-2xl tracking-tighter text-white block uppercase">
              ABRIL<span className="text-gold-accent">.</span>PETRUZZO
            </span>
            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Entrenamiento de fuerza personalizado, acompañamiento constante y planificación adaptada a cada persona y su necesidad. Online para todo el mundo, con resultados reales y sostenibles.
            </p>

            {/* Social Icons: only Instagram + WhatsApp */}
            <div className="flex items-center space-x-4 pt-2 justify-center md:justify-start">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-gold-accent hover:border-gold-accent/40 transition-colors"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-gold-accent hover:border-gold-accent/40 transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-center md:items-start">
            <span className="font-mono text-[9px] text-zinc-400 tracking-widest uppercase font-bold block">
              // NAVEGACIÓN
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="text-zinc-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#filosofia" className="text-zinc-400 hover:text-white transition-colors">Filosofía</a></li>
              <li><a href="#beneficios" className="text-zinc-400 hover:text-white transition-colors">Diferenciales</a></li>
              <li><a href="#servicios" className="text-zinc-400 hover:text-white transition-colors">Programas</a></li>
              <li><a href="#resultados" className="text-zinc-400 hover:text-white transition-colors">Resultados</a></li>
              <li><a href="#contacto" className="text-zinc-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-4 flex flex-col items-center md:items-start">
            <span className="font-mono text-[9px] text-zinc-400 tracking-widest uppercase font-bold block">
              // CONTACTO
            </span>
            <ul className="space-y-3 text-xs text-zinc-400 font-light">
              <li>
                <span className="font-mono text-[9px] text-zinc-600 block uppercase tracking-wider">Ubicación</span>
                <span className="text-white">Buenos Aires, Argentina</span>
              </li>
              <li>
                <span className="font-mono text-[9px] text-zinc-600 block uppercase tracking-wider">WhatsApp</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold-accent transition-colors"
                >
                  +54 9 11 5342-1103
                </a>
              </li>
              <li>
                <span className="font-mono text-[9px] text-zinc-600 block uppercase tracking-wider">Instagram</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold-accent transition-colors"
                >
                  @abii.fiitness
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-[10px] font-mono text-zinc-600 text-center md:text-left">
            <span className="w-full sm:w-auto">© 2026 ABRIL PETRUZZO. TODOS LOS DERECHOS RESERVADOS.</span>
            <a href="#" className="hover:text-zinc-400 transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacidad</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-zinc-800 hover:border-gold-accent hover:text-gold-accent text-zinc-400 flex items-center justify-center rounded-none transition-colors group cursor-pointer"
            aria-label="Volver arriba"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Big Background Editorial Typography */}
        <div className="absolute left-1/2 bottom-[-40px] transform -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden opacity-5 z-0">
          <span className="font-display font-black text-[12vw] uppercase tracking-tighter text-white leading-none whitespace-nowrap">
            ABRIL PETRUZZO
          </span>
        </div>

      </div>
    </footer>
  );
}
