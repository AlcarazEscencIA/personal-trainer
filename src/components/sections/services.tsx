"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionBadge } from "@/components/ui/section-badge";
import { SectionTitle } from "@/components/ui/section-title";
import { CustomButton } from "@/components/ui/button";

interface Program {
  id: string;
  num: string;
  name: string;
  subtitle: string;
  price: string;
  spots: string;
  features: string[];
  description: string[];
  ctaText: string;
}

export default function Services() {
  const [openProgramId, setOpenProgramId] = useState<string | null>("program-1");

  const programs: Program[] = [
    {
      id: "program-1",
      num: "01",
      name: "ASESORAMIENTO ONLINE",
      subtitle: "ENTRENAMIENTO PERSONALIZADO + PLAN DE ALIMENTACIÓN + SEGUIMIENTO CONSTANTE",
      price: "Consultar Tarifa Completa",
      spots: "Solo 10 cupos disponibles este mes",
      description: [
        "Un acompañamiento integral pensado para ayudarte a lograr resultados reales de manera sostenible y adaptada completamente a vos.",
        "Dejá atrás las rutinas y planes genéricos. Este programa está diseñado para entender tus objetivos, tu estilo de vida, tus tiempos y las necesidades reales de tu cuerpo, creando una planificación personalizada que puedas sostener y disfrutar a largo plazo.",
        "La propuesta combina entrenamiento, alimentación y seguimiento diario para acompañarte durante todo tu proceso y ayudarte a construir hábitos más saludables, consistentes y efectivos.",
      ],
      features: [
        "Rutina de entrenamiento personalizada según objetivos y nivel físico",
        "Plan de alimentación adaptado a tu estilo de vida y horarios",
        "Seguimiento diario y acompañamiento constante",
        "Ajustes progresivos según evolución y necesidades",
        "Asistencia y resolución de dudas durante el proceso",
        "Planificación pensada para generar hábitos sostenibles",
      ],
      ctaText: "SOLICITAR ASESORAMIENTO ONLINE",
    },
    {
      id: "program-2",
      num: "02",
      name: "RUTINA DE ENTRENAMIENTO",
      subtitle: "PLANIFICACIÓN PERSONALIZADA PARA POTENCIAR TU PROGRESO",
      price: "Consultar Tarifa Plan",
      spots: "Cupos limitados este mes",
      description: [
        "Un programa de entrenamiento diseñado específicamente para vos, teniendo en cuenta tus objetivos, experiencia, disponibilidad y nivel físico actual.",
        "Cada rutina busca optimizar tu rendimiento y ayudarte a progresar de manera ordenada, eficiente y sostenible, respetando tus tiempos y adaptándose a tu realidad diaria.",
        "El enfoque está puesto en crear un entrenamiento claro, estructurado y personalizado, pensado para que puedas avanzar con constancia y maximizar tus resultados.",
      ],
      features: [
        "Rutina personalizada según objetivos y nivel físico",
        "Adaptación a tu disponibilidad horaria y ritmo semanal",
        "Organización estratégica del entrenamiento",
        "Ejercicios pensados según tus necesidades y metas",
        "Estructura progresiva para mejorar el rendimiento",
        "Enfoque orientado a resultados reales y sostenibles",
      ],
      ctaText: "OBTENER MI RUTINA",
    },
    {
      id: "program-3",
      num: "03",
      name: "PLAN DE ALIMENTACIÓN",
      subtitle: "ALIMENTACIÓN PERSONALIZADA PARA ACOMPAÑAR TU OBJETIVO",
      price: "Consultar Tarifa Plan",
      spots: "Cupos limitados este mes",
      description: [
        "Un plan nutricional diseñado para adaptarse a tu estilo de vida, tus gustos personales y tu rutina diaria, buscando que la alimentación sea sostenible, práctica y disfrutable.",
        "La idea no es restringir ni imponer dietas genéricas, sino construir una planificación que puedas mantener en el tiempo y que acompañe de manera real tu bienestar y tus objetivos físicos.",
        "Cada detalle se piensa estratégicamente para ayudarte a mejorar tus hábitos y lograr una relación más equilibrada con la alimentación.",
      ],
      features: [
        "Plan de alimentación personalizado",
        "Adaptación a horarios, rutina y estilo de vida",
        "Organización nutricional según objetivos personales",
        "Enfoque práctico, flexible y sostenible",
        "Plan pensado según preferencias y hábitos diarios",
        "Estrategia alimentaria orientada al bienestar integral",
      ],
      ctaText: "OBTENER MI PLAN",
    },
  ];

  const handleToggle = (id: string) => {
    setOpenProgramId(openProgramId === id ? null : id);
  };

  return (
    <section
      id="servicios"
      className="relative bg-obsidian py-16 md:py-24 lg:py-32 px-6 overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <SectionBadge>PROGRAMAS EXCLUSIVOS</SectionBadge>
            <SectionTitle
              title={<>ENTRENAMIENTO,<br /></>}
              subtitle="ESTRATEGIA Y CONSTANCIA."
            />
          </div>
          <div className="text-zinc-400 text-sm max-w-md font-light leading-relaxed space-y-4">
            <p>
              Planes personalizados diseñados para ayudarte a lograr resultados reales de forma sostenible y adaptada a vos.
            </p>
            <p>
              Cada programa combina planificación inteligente, acompañamiento cercano y una estructura pensada para que puedas avanzar con claridad, disciplina y enfoque.
            </p>
          </div>
        </div>

        {/* Premium Accordion List Grid (Inspired by Image 4 accordion layout) */}
        <div className="border-t border-zinc-800">
          {programs.map((program) => {
            const isOpen = openProgramId === program.id;
            return (
              <div
                key={program.id}
                className="border-b border-zinc-800 transition-colors duration-300"
              >
                {/* Accordion Trigger Header Button */}
                <button
                  onClick={() => handleToggle(program.id)}
                  className="w-full text-left py-6 md:py-8 flex justify-between items-center group focus:outline-none cursor-pointer min-h-[72px]"
                >
                  <div className="flex items-center space-x-6 md:space-x-12">
                    <span className="font-mono text-xs md:text-sm text-gold-accent/60 group-hover:text-gold-accent transition-colors">
                      {program.num}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-xl md:text-3xl text-white uppercase tracking-tight group-hover:text-gold-accent transition-colors">
                        {program.name}
                      </h3>
                      <p className="font-mono text-[9px] md:text-[10px] tracking-wider text-zinc-500 uppercase">
                        {program.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <span className="hidden md:inline font-mono text-[10px] text-zinc-500 tracking-wider">
                      {program.spots}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-zinc-800 group-hover:border-gold-accent/40 flex items-center justify-center transition-colors">
                      {isOpen ? (
                        <Minus size={16} className="text-gold-accent" />
                      ) : (
                        <Plus size={16} className="text-zinc-400 group-hover:text-gold-accent" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Content Wrapper */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-2 pl-4 md:pl-12 lg:pl-20 grid grid-cols-1 lg:grid-cols-12 gap-8 text-zinc-300">
                        {/* Details Paragraph */}
                        <div className="lg:col-span-6 space-y-6">
                          <div className="space-y-4">
                            {program.description.map((paragraph, index) => (
                              <p key={index} className="text-zinc-400 text-sm leading-relaxed font-light">
                                {paragraph}
                              </p>
                            ))}
                          </div>

                          <div className="bg-zinc-950 p-4 sm:p-6 border border-zinc-900 flex flex-wrap justify-between items-center gap-2">
                            <div>
                              <span className="font-mono text-[9px] text-zinc-500 tracking-widest block font-bold">
                                // VALOR ASOCIADO
                              </span>
                              <span className="font-display font-bold text-white text-base">
                                {program.price}
                              </span>
                            </div>
                            <span className="text-[10px] text-gold-accent font-mono">
                              *Sujeto a aplicación y entrevista previa
                            </span>
                          </div>

                          <CustomButton href="#contacto" variant="outline" fullWidth className="justify-between w-full">
                            <span>{program.ctaText}</span>
                            <ArrowUpRight size={16} />
                          </CustomButton>
                        </div>

                        {/* Program Inclusions (Right side checklist) */}
                        <div className="lg:col-span-6 space-y-4">
                          <span className="font-mono text-[9px] text-zinc-500 tracking-widest block font-bold">
                            // QUÉ INCLUYE ESTE PLAN
                          </span>
                          <ul className="space-y-3">
                            {program.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-3 text-xs md:text-sm font-light text-zinc-300">
                                <CheckCircle2 size={16} className="text-gold-accent mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic bottom scrolling bar banner in services matching Image 4 style */}
        <div className="mt-20 overflow-hidden w-full select-none pointer-events-none relative py-6 border-y border-zinc-900 bg-zinc-950/40">
          <div className="animate-marquee flex items-center space-x-12 whitespace-nowrap">
            {Array(3)
              .fill(["ONLINE", "PERSONALIZADO", "ALIMENTACION", "ABRIL FITNESS", "CONSTANCIA", "DISCIPLINA", "SALUD"])
              .flat()
              .map((word, index) => (
                <span
                  key={index}
                  className="font-display font-black text-2xl md:text-4xl uppercase text-zinc-800 tracking-wider flex items-center space-x-12"
                >
                  <span>{word}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-accent/20" />
                </span>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}
