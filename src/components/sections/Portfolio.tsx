"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

export function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" ref={ref} className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest">
            Portfolio
          </p>
          <h2 className="mt-2 font-heading font-bold text-3xl sm:text-4xl text-text-primary">
            Selected work
          </h2>
          <p className="mt-4 text-text-muted">
            High-impact projects for clients across the UK, USA, and Europe.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-bg-card overflow-hidden hover:border-accent/50 hover:shadow-glow-sm transition-all duration-300"
            >
              <div className="aspect-video relative bg-gradient-to-br from-accent/20 to-accent-secondary/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading font-bold text-5xl text-accent/40">
                    {item.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-bg-card/90 text-xs font-medium text-text-primary border border-border">
                  {item.region}
                </div>
                <motion.div
                  className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  whileHover={{ opacity: 1 }}
                >
                  <span className="px-4 py-2 rounded-full bg-bg-card text-accent text-sm font-medium border border-border">
                    Case study
                  </span>
                </motion.div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-text-primary">
                  {item.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-bg-secondary text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
