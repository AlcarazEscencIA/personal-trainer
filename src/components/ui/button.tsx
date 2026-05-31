import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"a"> {
  href: string;
  variant?: "primary" | "outline" | "solid";
  fullWidth?: boolean;
}

export function CustomButton({ 
  children, 
  className, 
  variant = "primary", 
  fullWidth = false,
  ...props 
}: ButtonProps) {
  
  const baseClasses = "inline-flex items-center justify-center space-x-3 px-8 py-4 min-h-[52px] font-display font-bold text-[11px] uppercase tracking-widest transition-all duration-300 relative overflow-hidden group cursor-pointer";
  
  const variants = {
    primary: "text-white shadow-2xl bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    outline: "border border-gold-accent/40 text-gold-accent bg-transparent hover:bg-gold-accent hover:text-obsidian hover:border-gold-accent rounded-none",
    solid: "bg-gold-accent text-obsidian border-gold-accent"
  };

  return (
    <motion.a
      whileHover={variant === "primary" ? { scale: 1.03 } : undefined}
      whileTap={variant === "primary" ? { scale: 0.97 } : undefined}
      className={cn(baseClasses, variants[variant], fullWidth && "w-full sm:w-auto", className)}
      {...props}
    >
      {children}
    </motion.a>
  );
}
