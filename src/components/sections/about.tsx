"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/section-badge";
import { SectionTitle } from "@/components/ui/section-title";
import { CustomButton } from "@/components/ui/button";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function About() {
  return (
    <section
      id="filosofia"
      className="relative bg-obsidian py-16 md:py-24 lg:py-32 px-6 overflow-hidden border-t border-zinc-900"
    >
      {/* Subtle background detail */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-blue/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ── LEFT COLUMN: Bio Copy ── */}
          <div className="lg:col-span-7 flex flex-col space-y-10">

            {/* Eyebrow label & Headline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionBadge>SOBRE MÍ</SectionBadge>
              <SectionTitle
                title={<>REFORMULAR EL MOVIMIENTO<br /></>}
                subtitle="ES REDEFINIR QUIÉN SOS."
              />
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="w-16 h-[2px] bg-gold-accent origin-left"
            />

            {/* Bio paragraphs */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1, ease }}
                className="font-display font-light text-lg md:text-xl text-zinc-100 leading-snug"
              >
                Soy <strong className="font-bold text-white">Abril Petruzzo</strong>, entrenadora personal especializada en entrenamiento de fuerza, transformación física y desarrollo de hábitos sostenibles.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.18, ease }}
                className="text-zinc-400 text-sm md:text-base leading-relaxed font-light"
              >
                Mi enfoque está en el entrenamiento de fuerza, adaptado 100% a la necesidad de cada persona. Ya seas principiante, intermedia o deportista con experiencia, trabajo con planes totalmente personalizados, diseñados según tus objetivos, tu ritmo y tu estilo de vida.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.26, ease }}
                className="text-zinc-400 text-sm md:text-base leading-relaxed font-light"
              >
                El verdadero cambio no sucede de un día para el otro: se construye con constancia, disciplina y acompañamiento real. Mi misión es que puedas transformar no solo tu físico, sino también tu mentalidad, tu energía y la forma en la que te relacionás con vos misma.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.34, ease }}
                className="text-zinc-400 text-sm md:text-base leading-relaxed font-light"
              >
                Podés entrenar desde cualquier lugar o de manera presencial, manteniendo una experiencia profesional, cercana y completamente enfocada en vos.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.42, ease }}
            >
              <CustomButton href="#contacto" variant="outline" fullWidth>
                COMENZAR MI TRANSFORMACIÓN
              </CustomButton>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Image of Abril ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, delay: 0.1, ease }}
            className="lg:col-span-5 relative w-full h-[300px] sm:h-[400px] lg:h-[640px] flex items-center justify-center"
          >
            {/* Main image frame */}
            <div className="relative w-full h-full overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/abril.jpg"
                alt="Abril Petruzzo — Entrenadora Personal"
                fill
                className="object-cover object-top filter brightness-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-slate-blue/10 mix-blend-overlay" />
            </div>

            {/* Gold vertical accent line */}
            <div className="absolute left-0 top-12 bottom-12 w-[2px] bg-gradient-to-b from-transparent via-gold-accent/50 to-transparent hidden lg:block" />

            {/* Floating name badge */}
            <div className="absolute bottom-8 left-4 right-4 sm:left-8 bg-obsidian/85 backdrop-blur-md px-5 py-4 border border-gold-accent/20">
              <span className="font-mono text-[9px] text-gold-accent tracking-widest block font-bold mb-1">
                // ENTRENADORA PERSONAL
              </span>
              <span className="font-display font-black text-lg text-white uppercase tracking-tight block">
                ABRIL PETRUZZO
              </span>
              <span className="text-[11px] text-zinc-400 font-light mt-0.5 block">
                Transformación Física · Entrenamiento de Fuerza · Online & Presencial
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
