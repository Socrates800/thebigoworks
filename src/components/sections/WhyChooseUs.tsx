"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHY_CHOOSE } from "@/lib/constants";
import { WhyChooseIcon } from "@/components/ui/WhyChooseIcon";

export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" ref={ref} className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest">
            Why choose us
          </p>
          <h2 className="mt-2 font-heading font-bold text-3xl sm:text-4xl text-text-primary">
            Why choose The Big O Works
          </h2>
          <p className="mt-4 text-text-muted">
            We combine international quality standards with transparent, DevOps-driven workflows.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <motion.article
                className="flex gap-4 p-6 rounded-2xl border border-border bg-bg-card hover:border-accent/30 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <WhyChooseIcon name={item.icon} className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-text-primary">
                  {item.title}
                </h3>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
