"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/services";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest">What we do</p>
          <h2 className="mt-2 font-heading font-bold text-3xl sm:text-4xl text-text-primary">
            Premium services for global brands
          </h2>
          <p className="mt-4 text-text-muted">
            From mobile apps to cloud infrastructure, we deliver at the highest standard.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Link href={`/services/${service.slug}`}>
                <motion.article
                  className="group h-full p-6 rounded-2xl border border-border bg-bg-card hover:border-accent/50 hover:shadow-glow-sm transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors">
                    <ServiceIcon name={service.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                    View details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
