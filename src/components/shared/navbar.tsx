"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Filosofía", href: "#filosofia" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Servicios", href: "#servicios" },
  { label: "Resultados", href: "#resultados" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    const next = !isMobileMenuOpen;
    setIsMobileMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? "py-4 bg-obsidian/85 backdrop-blur-md border-b border-gold-accent/10"
            : "py-6 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#inicio"
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <span className="font-display font-black text-xl md:text-2xl uppercase tracking-tighter text-white">
              ABRIL<span className="text-gold-accent">.</span>PETRUZZO
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display font-medium text-xs uppercase tracking-widest text-silver hover:text-white transition-colors duration-200 relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Call to Action Desktop */}
          <div className="hidden md:block">
            <a
              href="#contacto"
              className="inline-flex items-center space-x-2 border border-gold-accent/40 bg-transparent px-5 py-2.5 rounded-none font-display font-semibold text-[11px] uppercase tracking-widest text-gold-accent hover:bg-gold-accent hover:text-obsidian hover:border-gold-accent transition-all duration-300"
            >
              <span>POSTULARSE AHORA</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Hamburger Mobile Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center text-silver hover:text-white transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-xl flex flex-col justify-between p-8 md:hidden"
          >
            <div className="flex-1 flex flex-col justify-center items-center space-y-6 mt-16 pb-8">
              <span className="font-mono text-[10px] tracking-widest text-gold-accent/60 uppercase text-center">
                // MENÚ DE NAVEGACIÓN
              </span>
              <nav className="flex flex-col items-center space-y-2 w-full">
                {navLinks.map((link, index) => (
                  <motion.a
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.08 }}
                    key={link.label}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="font-display font-bold text-3xl uppercase tracking-wider text-silver hover:text-white transition-colors duration-200 py-3 min-h-[56px] flex items-center justify-center w-full text-center"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col space-y-4 border-t border-gold-accent/15 pt-8"
            >
              <a
                href="#contacto"
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-between border border-gold-accent bg-transparent px-6 py-4 rounded-none font-display font-bold text-xs uppercase tracking-widest text-gold-accent hover:bg-gold-accent hover:text-obsidian transition-colors duration-300"
              >
                <span>APLICAR AL PROGRAMA</span>
                <ArrowUpRight size={16} />
              </a>
              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                <span>© 2026 ABRIL PETRUZZO</span>
                <span>BUENOS AIRES, AR</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
