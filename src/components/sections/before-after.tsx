"use client";

import React from "react";
import ComparisonSlider from "../ui/slider";
import { SectionBadge } from "@/components/ui/section-badge";
import { SectionTitle } from "@/components/ui/section-title";

export default function BeforeAfter() {
  const metrics = [
    { value: "4", label: "Meses de proceso", sub: "Entrenamiento de fuerza constante desde el primer día" },
    { value: "↑", label: "Fuerza y energía", sub: "Mejora real y visible en cada sesión" },
    { value: "✓", label: "Alimentación acompañada", sub: "Guía nutricional incluida en el seguimiento" },
    { value: "★", label: "Resultado que se ve", sub: "Cambio físico y mental comprobable" },
  ];

  return (
    <section
      id="resultados"
      className="relative bg-charcoal py-16 md:py-24 lg:py-32 px-6 overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Analytical Transformation Stats */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <SectionBadge>CASOS DE ÉXITO</SectionBadge>
              <SectionTitle
                title={<>CIENCIA EN<br />CADA GRADIENTE DE<br /></>}
                subtitle="EVOLUCIÓN"
              />
              <p className="text-zinc-400 text-sm font-light leading-relaxed pt-2">
                Este es el resultado real de 4 meses de entrenamiento de fuerza, alimentación guiada y seguimiento constante. Sin atajos. Sin promesas vacías. Solo método, compromiso y un cambio que se ve.
              </p>
            </div>

            {/* Metrics Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-zinc-800/80 pt-8">
              {metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-mono text-2xl md:text-3xl lg:text-4xl text-gold-accent font-black tracking-tight block">
                    {metric.value}
                  </span>
                  <span className="font-display font-bold text-xs text-white block uppercase">
                    {metric.label}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-light block leading-snug">
                    {metric.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Slider Container */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex justify-between items-center px-2">
              <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
                // CONTROL DE reveal INTERACTIVO
              </span>
              <span className="font-mono text-[9px] text-gold-accent tracking-widest uppercase font-bold">
                ← ARRASTRA LA BARRA PARA COMPARAR →
              </span>
            </div>

            {/* Slider Embed */}
            <ComparisonSlider
              beforeImage="/images/antes.png"
              afterImage="/images/despues.png"
              beforeLabel="ANTES — Mes 1"
              afterLabel="DESPUÉS — 4 Meses"
              beforeLabelMobile="1 MES"
              afterLabelMobile="4 MESES"
            />

            <div className="bg-zinc-950/80 p-3 sm:p-4 border border-zinc-900 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-xs text-zinc-400 font-light">
              <span><strong>Resultado real:</strong> Alumna con entrenamiento de fuerza, alimentación y seguimiento personalizado.</span>
              <span className="text-gold-accent font-mono text-[10px]">Proceso: 4 Meses</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
