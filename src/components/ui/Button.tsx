"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full transition-all duration-300";

const variants = {
  primary:
    "bg-gradient-to-r from-accent to-accent-secondary text-white hover:shadow-glow-sm",
  secondary:
    "bg-gradient-to-r from-accent-gold to-amber-600 text-white hover:shadow-lg",
  outline:
    "border border-border text-text-primary hover:border-accent hover:text-accent",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
