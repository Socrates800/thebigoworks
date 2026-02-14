import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SITE } from "@/lib/constants";

const Navbar = dynamic(() => import("@/components/layout/Navbar").then((m) => m.Navbar), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/layout/Footer").then((m) => m.Footer), {
  ssr: false,
});

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | The Big O Works" };
  return {
    title: `${service.title} | ${SITE.name}`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All services
          </Link>

          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
              <ServiceIcon name={service.icon} className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary">
                {service.title}
              </h1>
              <p className="mt-2 text-lg text-text-muted">{service.shortDescription}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-text-muted leading-relaxed">{service.longDescription}</p>
          </div>

          <section className="mt-12">
            <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
              What we deliver
            </h2>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-muted"
                >
                  <span className="text-accent mt-1 flex-shrink-0" aria-hidden>
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
              Technologies we use
            </h2>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-bg-secondary dark:bg-bg-card border border-border text-sm text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <div className="mt-16 p-6 md:p-8 rounded-2xl border border-border bg-bg-card">
            <h2 className="font-heading font-semibold text-xl text-text-primary mb-2">
              Ready to get started?
            </h2>
            <p className="text-text-muted mb-6">
              Tell us about your project and we&apos;ll outline a proposal tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full bg-gradient-to-r from-accent to-accent-secondary text-white hover:shadow-glow-sm transition-all"
              >
                Get Proposal
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full border border-border text-text-primary hover:border-accent hover:text-accent transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
