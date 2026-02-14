"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, var(--accent), transparent)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest">
            Get in touch
          </p>
          <h2 className="mt-2 font-heading font-bold text-3xl sm:text-4xl text-text-primary">
            Start your project
          </h2>
          <p className="mt-4 text-text-muted">
            Tell us about your goals. We&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a
              href="mailto:hello@thebigoworks.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-card hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-heading font-medium text-text-primary">Email</p>
                <p className="text-sm text-text-muted">hello@thebigoworks.com</p>
              </div>
            </a>
            <a
              href="https://wa.me/351913624470"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-card hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-heading font-medium text-text-primary">WhatsApp</p>
                <p className="text-sm text-text-muted">+351 913 624 470</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-card">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-heading font-medium text-text-primary">Lisbon</p>
                <p className="text-sm text-text-muted">Lisbon, Portugal</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-card">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="font-heading font-medium text-text-primary">Office &amp; Team</p>
                <p className="text-sm text-text-muted">Lahore, Pakistan</p>
              </div>
            </div>
            <Button href="#contact" variant="outline" className="w-full sm:w-auto">
              Book consultation
            </Button>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-2xl border border-border bg-bg-card"
          >
            {submitted ? (
              <p className="text-center text-accent font-medium py-8">
                Thank you. We&apos;ll be in touch soon.
              </p>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="sr-only">Name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </label>
                  <label className="block">
                    <span className="sr-only">Email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </label>
                </div>
                <label className="block mt-4">
                  <span className="sr-only">Company</span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </label>
                <label className="block mt-4">
                  <span className="sr-only">Message</span>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  />
                </label>
                <Button type="submit" variant="primary" className="mt-6 w-full sm:w-auto">
                  Get Proposal
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
