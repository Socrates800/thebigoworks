"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="py-24 md:py-32 bg-bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest">
            Our process
          </p>
          <h2 className="mt-2 font-heading font-bold text-3xl sm:text-4xl text-text-primary">
            From idea to launch and beyond
          </h2>
          <p className="mt-4 text-text-muted">
            A clear, transparent workflow that keeps you informed at every step.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <motion.div
              className="absolute top-8 left-0 right-0 h-0.5 bg-border"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ originX: 0 }}
            />
            <div className="relative grid grid-cols-7 gap-4">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full border-2 border-accent bg-bg-card flex items-center justify-center font-heading font-bold text-accent z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    {i + 1}
                  </motion.div>
                  <p className="mt-4 text-center text-sm font-medium text-text-primary">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-16 lg:hidden space-y-6">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.4 }}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-accent bg-bg-card flex items-center justify-center font-heading font-bold text-accent">
                {i + 1}
              </div>
              <p className="pt-2 text-text-primary font-medium">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
