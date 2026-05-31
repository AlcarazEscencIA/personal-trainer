"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface MarqueeProps {
  words: string[];
  className?: string;
  textClassName?: string;
  showSeparator?: boolean;
  speed?: number;
}

export default function Marquee({
  words,
  className,
  textClassName,
  showSeparator = true,
  speed = 45,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "overflow-hidden w-full select-none pointer-events-none flex relative",
        className
      )}
    >
      {/* Edge Fades for Cinematic Depth */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-blue to-transparent z-10 hidden md:block" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-blue to-transparent z-10 hidden md:block" />

      <div
        className="animate-marquee flex items-center space-x-16 whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Track 1 */}
        <div className="flex items-center space-x-16 py-2">
          {words.map((word, idx) => (
            <React.Fragment key={idx}>
              <span
                className={cn(
                  "font-display font-black text-[14vw] uppercase leading-none tracking-tighter text-white select-none",
                  textClassName
                )}
              >
                {word}
              </span>
              {showSeparator && (
                <span className="inline-block w-6 h-6 rounded-full bg-gold-accent/40" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate Track 2 for seamless infinite loop */}
        <div className="flex items-center space-x-16 py-2">
          {words.map((word, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <span
                className={cn(
                  "font-display font-black text-[14vw] uppercase leading-none tracking-tighter text-white select-none",
                  textClassName
                )}
              >
                {word}
              </span>
              {showSeparator && (
                <span className="inline-block w-6 h-6 rounded-full bg-gold-accent/40" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
