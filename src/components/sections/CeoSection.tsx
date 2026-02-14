"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const CEO_NAME = "Raja Hasnain Mukhtar";
const CEO_TITLE = "Chief Executive Officer";
const CEO_MESSAGE = `At The Big O Works, we believe in engineering digital excellence that scales across borders. Our mission is to partner with ambitious teams in Portugal, the UK, USA, and Europe—delivering premium technology solutions that drive growth and build lasting trust.

We combine European design sensibility with Silicon Valley standards: clean code, secure architecture, and transparent communication. Every project we take on is a commitment to quality and long-term partnership.

Thank you for considering us. We look forward to building something exceptional with you.`;

export function CeoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [imageError, setImageError] = useState(false);

  return (
    <section id="ceo" ref={ref} className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest">
            Leadership
          </p>
          <h2 className="mt-2 font-heading font-bold text-3xl sm:text-4xl text-text-primary">
            A message from our CEO
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-bg-card overflow-hidden shadow-soft dark:shadow-soft-dark">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative aspect-square md:aspect-auto md:min-h-[320px] bg-bg-secondary">
                {!imageError ? (
                  <Image
                    src="/ceo.jfif"
                    alt={CEO_NAME}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority={false}
                    unoptimized
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-accent/10">
                    <span className="font-heading font-bold text-5xl text-accent">
                      RHM
                    </span>
                  </div>
                )}
              </div>
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <blockquote className="text-text-muted leading-relaxed whitespace-pre-line">
                  {CEO_MESSAGE}
                </blockquote>
                <footer className="mt-8 pt-6 border-t border-border">
                  <p className="font-heading font-semibold text-text-primary text-lg">
                    {CEO_NAME}
                  </p>
                  <p className="text-sm text-accent mt-0.5">{CEO_TITLE}</p>
                </footer>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
