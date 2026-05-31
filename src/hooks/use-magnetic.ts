"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

/**
 * A custom hook to calculate magnetic attraction coordinates for hoverable components.
 * Perfect for buttons, cards, and special items to draw the user's cursor physically.
 */
export function useMagnetic(strength: number = 0.3) {
  const ref = useRef<any>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 120, mass: 0.2 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    x: springX,
    y: springY,
    handleMouseMove,
    handleMouseLeave,
  };
}
