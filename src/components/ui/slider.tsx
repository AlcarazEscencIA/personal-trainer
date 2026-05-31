"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface SliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeLabelMobile?: string;
  afterLabelMobile?: string;
}

export default function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "ANTES",
  afterLabel = "DESPUÉS",
  beforeLabelMobile,
  afterLabelMobile,
}: SliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    // Only drag on left click
    if (e.button !== 0) return;
    setIsDragging(true);
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("pointerup", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280px] sm:h-[400px] md:h-[550px] overflow-hidden select-none border border-gold-accent/15 cursor-ew-resize group"
      onPointerDown={handlePointerDown}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Bottom Layer) */}
      <Image
        src={beforeImage}
        alt="Antes"
        fill
        className="object-cover filter grayscale brightness-50 contrast-125"
        draggable={false}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute bottom-6 left-6 bg-obsidian/80 backdrop-blur-md px-4 py-2 font-mono text-[10px] tracking-widest text-zinc-400 border border-zinc-800/80 z-20">
        {/* Mobile: solo muestra el label corto; Desktop: label completo */}
        {beforeLabelMobile && (
          <span className="block sm:hidden">{beforeLabelMobile}</span>
        )}
        <span className={beforeLabelMobile ? "hidden sm:block" : ""}>{beforeLabel}</span>
      </div>

      {/* After Image (Top Layer, Clipped) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden z-10"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={afterImage}
          alt="Después"
          fill
          className="object-cover brightness-95"
          draggable={false}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute bottom-6 right-6 bg-gold-accent/90 backdrop-blur-md px-4 py-2 font-mono text-[10px] tracking-widest text-obsidian font-bold border border-gold-accent/40 z-20">
          {/* Mobile: solo muestra el label corto; Desktop: label completo */}
          {afterLabelMobile && (
            <span className="block sm:hidden">{afterLabelMobile}</span>
          )}
          <span className={afterLabelMobile ? "hidden sm:block" : ""}>{afterLabel}</span>
        </div>
      </div>

      {/* Vertical Slider Bar */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gold-accent z-20 cursor-ew-resize flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-12 h-12 rounded-full bg-gold-accent text-obsidian flex items-center justify-center shadow-2xl border border-obsidian/80 group-hover:scale-110 transition-transform duration-200">
          <MoveHorizontal size={20} />
        </div>
      </div>
    </div>
  );
}
