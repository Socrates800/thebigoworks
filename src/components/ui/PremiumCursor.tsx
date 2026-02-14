"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function PremiumCursor() {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest("a, button");
      setHover(!!t);
    };
    const onOut = () => setHover(false);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  if (!mounted || typeof window === "undefined") return null;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        style={{ left: 0, top: 0, x: "-50%", y: "-50%" }}
      >
        <motion.div
          className="w-4 h-4 rounded-full border-2 border-accent"
          animate={{ scale: hover ? 1.5 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className="absolute left-0 top-0 w-2 h-2 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: hover ? 0.5 : 1 }}
          transition={{ duration: 0.2 }}
          style={{ left: "50%", top: "50%" }}
        />
      </motion.div>
    </>
  );
}
