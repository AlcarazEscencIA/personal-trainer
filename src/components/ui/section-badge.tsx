import React from "react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionBadge({ children, className, ...props }: SectionBadgeProps) {
  return (
    <div className={cn("flex items-center space-x-3 text-gold-accent mb-4", className)} {...props}>
      <span className="h-[1px] w-8 bg-gold-accent" />
      <span className="font-mono text-[11px] tracking-widest uppercase font-bold text-gold-accent">
        {children}
      </span>
    </div>
  );
}
