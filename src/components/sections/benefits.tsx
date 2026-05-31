"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { SectionTitle } from "@/components/ui/section-title";

export default function Benefits() {
  const benefitsList = [
    {
      title: "PERSONALIZACIÓN REAL",
      desc: "Cada plan de entrenamiento de fuerza se diseña según tus objetivos, tu nivel físico y tu estilo de vida. Nada es genérico: si estás empezando, buscás hipertrofia, fuerza funcional o mejorar tu composición corporal, cada rutina está estructurada estratégicamente para que progreses de manera eficiente, segura y sostenible.",
    },
    {
      title: "ACOMPAÑAMIENTO CONSTANTE",
      desc: "El seguimiento forma parte fundamental del proceso. Vas a contar con guía, apoyo y ajustes continuos para mantener la constancia, mejorar tu rendimiento y avanzar con confianza en cada etapa.",
    },
    {
      title: "TRANSFORMACIÓN INTEGRAL",
      desc: "El verdadero cambio sucede cuando cuerpo y mentalidad evolucionan juntos. Buscamos mejorar no solo tu físico, sino también tu energía, tu disciplina, tu seguridad y la forma en la que te sentís con vos misma.",
    },
    {
      title: "ONLINE & PRESENCIAL",
      desc: "Recibís tu rutina de entrenamiento de fuerza sin importar dónde estés. El plan llega a vos con instrucciones claras y seguimiento constante, adaptándose a tu realidad y tu lugar de entrenamiento.",
    },
  ];

  return (
    <section
      id="beneficios"
      className="relative bg-slate-blue py-16 md:py-24 lg:py-32 px-6 overflow-hidden text-white"
    >
      {/* Decorative Grid Reticle */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Benefits Text Grid */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <SectionBadge>DIFERENCIALES PREMIUM</SectionBadge>
              <SectionTitle
                title={<>UN ENFOQUE<br />DISEÑADO PARA<br /></>}
                subtitle="TRANSFORMAR MÁS QUE TU FÍSICO"
              />
              <div className="text-zinc-200 text-sm max-w-lg font-light leading-relaxed pt-2 space-y-4">
                <p>
                  Cada proceso de entrenamiento de fuerza está pensado para ayudarte a construir resultados reales, sostenibles y adaptados completamente a vos y a lo que necesitás.
                  <br />
                  No se trata solamente de levantar pesas, sino de desarrollar hábitos, disciplina y una versión más fuerte de vos misma, adaptando cada etapa a tu nivel y evolución.
                </p>
                <p>
                  Mi objetivo es ofrecerte una experiencia cercana, profesional y personalizada de entrenamiento de fuerza, donde cada ejercicio tenga un propósito claro y cada sesión forme parte de una transformación integral.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="space-y-3 group">
                  <div className="flex items-center space-x-2 text-gold-accent">
                    <CheckCircle2 size={14} className="opacity-80" />
                    <span className="font-mono text-[11px] tracking-wider font-bold">
                      // 0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white leading-tight uppercase">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-300 text-xs font-light leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: images */}
          <div className="lg:col-span-6">

            {/* ── MOBILE / TABLET: Compact Grid Layout ── */}
            <div className="lg:hidden grid grid-cols-2 gap-2 h-[340px] sm:h-[450px]">

              {/* Left Column: Image on top, Badge on bottom */}
              <div className="flex flex-col gap-2 h-full">
                <div className="flex-grow w-full relative overflow-hidden border border-gold-accent shadow-xl bg-white">
                  <Image
                    src="/images/planes2_v2.png"
                    alt="Enfoque Personalizado"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                </div>

                <div className="shrink-0 bg-obsidian/95 px-3 py-4 sm:px-4 sm:py-5 border border-gold-accent shadow-xl flex flex-col justify-center">
                  <span className="font-mono text-[8px] sm:text-[9px] text-gold-accent tracking-widest block font-bold">
                    // UBICACIÓN PRIVADA
                  </span>
                  <span className="font-display font-black text-xs sm:text-sm text-white uppercase tracking-wider mt-1.5 block leading-tight">
                    BUENOS AIRES, ARGENTINA
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-zinc-400 block font-light mt-1.5 leading-[1.3]">
                    Ingreso exclusivo bajo postulación y plan previo
                  </span>
                </div>
              </div>

              {/* Right Column: Full height image */}
              <div className="w-full h-full relative overflow-hidden border border-gold-accent shadow-xl bg-white flex items-center justify-center">
                <Image
                  src="/images/planes1_v2.jpeg"
                  alt="Planes de Entrenamiento Abril Petruzzo"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>

            </div>

            {/* ── DESKTOP: Original absolute collage ── */}
            <div className="hidden lg:block relative w-full h-[450px]">

              {/* Background Studio Photo (Right Card) */}
              <div className="absolute left-[39%] bottom-0 w-[55%] h-[75%] overflow-hidden border border-gold-accent shadow-2xl bg-white z-10">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/planes1_v2.jpeg"
                    alt="Planes de Entrenamiento Abril Petruzzo"
                    fill
                    className="object-contain object-right"
                    sizes="50vw"
                  />
                </div>
              </div>

              {/* Foreground Photo (Left Card) */}
              <div className="absolute left-0 top-0 w-[55%] h-[60%] pointer-events-none select-none z-20 border border-gold-accent shadow-2xl bg-white overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/planes2_v2.png"
                    alt="Enfoque Personalizado"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>

              {/* Horizontal pointer gold line */}
              <div className="absolute left-0 top-[50%] w-[45%] h-[1px] bg-gold-accent/40 z-30 pointer-events-none">
                <div className="absolute right-0 top-[-2.5px] w-1.5 h-1.5 rounded-full bg-gold-accent" />
              </div>

              {/* Float Badge */}
              <div className="absolute top-[60%] left-0 w-[55%] h-[40%] bg-obsidian/90 backdrop-blur-md px-5 py-4 border border-gold-accent z-30 flex flex-col justify-center">
                <span className="font-mono text-[9px] text-gold-accent tracking-widest block font-bold">// UBICACIÓN PRIVADA</span>
                <span className="font-display font-bold text-xs md:text-sm text-white uppercase tracking-wider mt-1">BUENOS AIRES, ARGENTINA</span>
                <span className="text-[10px] text-zinc-400 block font-light mt-1.5 leading-tight">Ingreso exclusivo bajo postulación y plan previo</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
