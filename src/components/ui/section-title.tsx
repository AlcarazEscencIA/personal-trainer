import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "title"> {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

export function SectionTitle({ title, subtitle, className, ...props }: SectionTitleProps) {
  return (
    <h2 
      className={cn("font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter leading-[0.95] text-white", className)} 
      {...props}
    >
      {title}
      {subtitle && (
        <span
          className="font-light italic block mt-1"
          style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}
        >
          {subtitle}
        </span>
      )}
    </h2>
  );
}
