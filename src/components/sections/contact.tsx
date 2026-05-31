"use client";

import React, { useState } from "react";
import { MessageSquare, Send, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SectionBadge } from "@/components/ui/section-badge";
import { SectionTitle } from "@/components/ui/section-title";

const contactSchema = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  whatsapp: z.string().min(8, "Introduce un número de WhatsApp válido"),
  edad: z.number({ message: "La edad debe ser un número" })
    .min(10, "Debes ser mayor de 10 años")
    .max(100, "Por favor introduce una edad válida"),
  modalidad: z.string(),
  objetivo: z.string(),
  experiencia: z.string(),
  compromiso: z.boolean().refine((val) => val === true, {
    message: "Debes confirmar tu compromiso",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      whatsapp: "",
      edad: 25,
      modalidad: "Asesoramiento Online",
      objetivo: "Fuerza e Hipertrofia",
      experiencia: "Intermedio (Gym regular)",
      compromiso: false,
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    // Compile WhatsApp message
    const phone = "5491153421103"; // Abril's WhatsApp
    const text = encodeURIComponent(
      `Hola Abril, mi nombre es *${data.nombre}* (Edad: ${data.edad}).\n\n` +
      `Me postulo para tu programa de transformación física en la modalidad: *${data.modalidad}*.\n` +
      `• Mi objetivo principal es: *${data.objetivo}*.\n` +
      `• Mi nivel de experiencia actual es: *${data.experiencia}*.\n` +
      `• Confirmo mi compromiso con tus altos estándares de entrenamiento: *Sí, acepto*.\n\n` +
      `¿Cuándo podemos agendar mi llamada de calibración kinésica? Mi WhatsApp es ${data.whatsapp}.`
    );

    const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

    setIsSubmitted(true);

    // Open WhatsApp after a brief delay
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitted(false);
    }, 1200);
  };

  return (
    <section
      id="contacto"
      className="relative bg-obsidian py-16 md:py-24 lg:py-32 px-6 overflow-hidden border-t border-zinc-900"
    >
      {/* Decorative Grid and Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(197,168,128,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(197,168,128,0.01)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-blue/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: CTA Pitch */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <SectionBadge>// SISTEMA DE POSTULACIÓN</SectionBadge>

              <SectionTitle
                title={
                  <>
                    INICIA TU<br />
                    TRANSFORMACIÓN<br />
                    <span className="text-gold-accent font-light italic">RADICAL</span>
                  </>
                }
                className="text-4xl md:text-6xl"
              />

              <p className="text-zinc-400 text-sm font-light leading-relaxed pt-2">
                Mis cupos mensuales son estrictamente limitados. Completá el formulario de postulación y, si sos la persona indicada para el programa, me voy a poner en contacto en menos de 24 horas para coordinar los próximos pasos.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-zinc-900">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-gold-accent/20 bg-zinc-950 flex items-center justify-center text-gold-accent flex-shrink-0 mt-0.5">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">// MODALIDAD ONLINE</h4>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed mt-1">Trabajo de forma 100% online. Recibís tu rutina de entrenamiento de fuerza desde cualquier lugar del mundo, con planes totalmente personalizados a tu necesidad y nivel.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-gold-accent/20 bg-zinc-950 flex items-center justify-center text-gold-accent flex-shrink-0 mt-0.5">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">// SEGUIMIENTO CONSTANTE</h4>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed mt-1">Acompañamiento real durante todo el proceso: ajustes en la rutina, guía en alimentación y soporte continuo para que avances sin parar.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form UI */}
          <div className="lg:col-span-7 bg-zinc-950 p-6 sm:p-8 md:p-12 border border-zinc-900 shadow-2xl relative">
            <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-8">
              // SOLICITUD DE ADMISIÓN
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="nombre" className="font-mono text-[9px] text-zinc-400 tracking-wider uppercase block">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    {...register("nombre")}
                    placeholder="Ej: Marina Salcedo"
                    className="w-full bg-obsidian border border-zinc-800 focus:border-gold-accent/50 focus:outline-none p-3 text-sm text-white placeholder-zinc-600 transition-colors duration-200"
                  />
                  {errors.nombre && (
                    <p className="text-rose-500 text-[10px] font-mono tracking-wider mt-1">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="font-mono text-[9px] text-zinc-400 tracking-wider uppercase block">
                    WhatsApp de Contacto (con código de país)
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    {...register("whatsapp")}
                    placeholder="Ej: +54 9 11 2345 6789"
                    className="w-full bg-obsidian border border-zinc-800 focus:border-gold-accent/50 focus:outline-none p-3 text-sm text-white placeholder-zinc-600 transition-colors duration-200"
                  />
                  {errors.whatsapp && (
                    <p className="text-rose-500 text-[10px] font-mono tracking-wider mt-1">
                      {errors.whatsapp.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Age */}
                <div className="space-y-2">
                  <label htmlFor="edad" className="font-mono text-[9px] text-zinc-400 tracking-wider uppercase block">
                    Edad
                  </label>
                  <input
                    type="number"
                    id="edad"
                    {...register("edad", { valueAsNumber: true })}
                    placeholder="Ej: 32"
                    className="w-full bg-obsidian border border-zinc-800 focus:border-gold-accent/50 focus:outline-none p-3 text-sm text-white placeholder-zinc-600 transition-colors duration-200"
                  />
                  {errors.edad && (
                    <p className="text-rose-500 text-[10px] font-mono tracking-wider mt-1">
                      {errors.edad.message}
                    </p>
                  )}
                </div>

                {/* Modality Selector */}
                <div className="space-y-2">
                  <label htmlFor="modalidad" className="font-mono text-[9px] text-zinc-400 tracking-wider uppercase block">
                    Modalidad Elegida
                  </label>
                  <select
                    id="modalidad"
                    {...register("modalidad")}
                    className="w-full bg-obsidian border border-zinc-800 focus:border-gold-accent/50 focus:outline-none p-3 text-sm text-white transition-colors duration-200"
                  >
                    <option value="Asesoramiento Online">Asesoramiento Online</option>
                    <option value="Rutina de Entrenamiento">Rutina de Entrenamiento</option>
                    <option value="Plan de Alimentación">Plan de Alimentación</option>
                  </select>
                </div>

                {/* Main Goal Selector */}
                <div className="space-y-2">
                  <label htmlFor="objetivo" className="font-mono text-[9px] text-zinc-400 tracking-wider uppercase block">
                    Objetivo Principal
                  </label>
                  <select
                    id="objetivo"
                    {...register("objetivo")}
                    className="w-full bg-obsidian border border-zinc-800 focus:border-gold-accent/50 focus:outline-none p-3 text-sm text-white transition-colors duration-200"
                  >
                    <option value="Alineación y Postura">Alineación y Postura</option>
                    <option value="Fuerza y Rendimiento">Fuerza y Rendimiento</option>
                    <option value="Rehabilitación y Dolores">Rehabilitación y Dolores</option>
                    <option value="Salud y Consistencia">Salud y Consistencia</option>
                  </select>
                </div>
              </div>

              {/* Experience Level Selector */}
              <div className="space-y-2">
                <label htmlFor="experiencia" className="font-mono text-[9px] text-zinc-400 tracking-wider uppercase block">
                  Experiencia previa en Pilates o Entrenamiento
                </label>
                <select
                  id="experiencia"
                  {...register("experiencia")}
                  className="w-full bg-obsidian border border-zinc-800 focus:border-gold-accent/50 focus:outline-none p-3 text-sm text-white transition-colors duration-200"
                >
                  <option value="Sin experiencia (Principiante absoluto)">Sin experiencia previa</option>
                  <option value="Intermedio (Pilates o Gimnasio regular)">Intermedio (Entreno con regularidad)</option>
                  <option value="Avanzado / Atleta de otra disciplina">Avanzado (Deportista / Exigencia alta)</option>
                </select>
              </div>

              {/* High Ticket Agreement Checkbox */}
              <div className="flex flex-col space-y-1 pt-2">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="compromiso"
                    {...register("compromiso")}
                    className="w-5 h-5 mt-0.5 accent-gold-accent border-zinc-800 bg-obsidian focus:ring-0 focus:outline-none rounded-none cursor-pointer flex-shrink-0"
                  />
                  <label htmlFor="compromiso" className="text-xs text-zinc-400 leading-normal select-none cursor-pointer">
                    Confirmo que comprendo que los cupos son estrictamente restringidos y acepto comprometerme de forma estricta y disciplinada con las directrices de entrenamiento diseñadas por Abril Petruzzo.
                  </label>
                </div>
                {errors.compromiso && (
                  <p className="text-rose-500 text-[10px] font-mono tracking-wider mt-1 pl-8">
                    {errors.compromiso.message}
                  </p>
                )}
              </div>

              {/* Custom Submit Button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full flex items-center justify-center space-x-3 border px-6 py-4 min-h-[52px] rounded-none font-display font-semibold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${isSubmitted
                    ? "bg-gold-accent text-obsidian border-gold-accent"
                    : "bg-transparent text-white border-zinc-800 hover:border-gold-accent/40 hover:bg-zinc-900"
                  }`}
              >
                {isSubmitted ? (
                  <>
                    <Send size={14} className="animate-ping" />
                    <span>REDIRECCIONANDO A WHATSAPP...</span>
                  </>
                ) : (
                  <>
                    <MessageSquare size={14} className="fill-current" />
                    <span>APLICAR AL PROGRAMA ELITE</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
