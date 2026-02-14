"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 dark:from-accent/10 dark:to-accent-secondary/10 border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-accent/20 dark:bg-accent/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-4xl text-accent">O</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-sm font-medium text-accent uppercase tracking-widest"
            >
              Who we are
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-2 font-heading font-bold text-3xl sm:text-4xl text-text-primary"
            >
              A global partner for digital excellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-6 text-text-muted leading-relaxed"
            >
              We are a premium tech agency serving high-ticket clients across Portugal, the UK, USA, and Europe. Our mission is to deliver scalable, secure, and elegant digital products that power growth for startups and enterprises alike.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-4 text-text-muted leading-relaxed"
            >
              International clients choose us for our commitment to quality, clean architecture, and long-term support. We combine European design sensibility with Silicon Valley engineering standards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-bold text-3xl sm:text-4xl text-accent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
