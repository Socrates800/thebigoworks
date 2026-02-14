"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary dark:from-bg-primary dark:via-bg-secondary/50 dark:to-bg-primary" />
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, var(--accent-secondary), transparent)",
        }}
      />
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-secondary/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-accent uppercase tracking-widest mb-4"
          >
            Global Tech Agency
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary leading-tight tracking-tight"
          >
            {SITE.tagline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="#contact" variant="primary">
              Get Proposal
            </Button>
            <Button href="#contact" variant="outline">
              Book Consultation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-text-muted"
          >
            <span className="flex items-center gap-2">
              <GlobeIcon />
              Global clients
            </span>
            <span className="flex items-center gap-2">
              <ShieldIcon />
              99.9% uptime
            </span>
            <span className="flex items-center gap-2">
              <PinIcon />
              Portugal · UK · USA
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
