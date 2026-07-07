import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";
import RevealCard from "@/components/reveal-card";

import { certificates } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Certificates | Kyan Oclares",
  description:
    "Professional certificates and credentials earned by Kyan Oclares.",
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          ← Back home
        </Link>

        <header className="py-16">
          <p className="text-sm font-medium text-accent">Continuous learning</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Certificates
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            Professional credentials, technical courses, and learning
            milestones.
          </p>
        </header>

        {certificates.length === 0 ? (
          <section className="flex min-h-72 flex-col items-center justify-center rounded-3xl border border-dashed border-line bg-surface p-8 text-center">
            <Award size={36} className="text-accent" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-medium">
              Certificates coming soon
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">
              Verified credentials will appear here as they are added.
            </p>
          </section>
        ) : (
          <div className="space-y-4">
            {certificates.map((certificate) => (
              <RevealCard key={`${certificate.title}-${certificate.issuer}`}>
                <article
                  className="overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-accent/40"
                >
                  <div className="grid gap-0 md:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
                    <div className="p-7">
                      <Award
                        size={24}
                        className="text-accent"
                        aria-hidden="true"
                      />
                      <h2 className="mt-8 text-xl font-medium">
                        {certificate.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted">
                        {certificate.issuer}
                      </p>

                      {certificate.credentialUrl ? (
                        <a
                          href={certificate.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-6 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-strong"
                        >
                          View credential
                          <ExternalLink
                            size={14}
                            aria-hidden="true"
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </a>
                      ) : null}
                    </div>

                    {certificate.imageUrl ? (
                      <div className="relative min-h-64 border-t border-line bg-background/50 md:border-t-0 md:border-l">
                        <Image
                          src={certificate.imageUrl}
                          alt={`${certificate.title} preview`}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className="object-contain p-4"
                        />
                      </div>
                    ) : null}
                  </div>
                </article>
              </RevealCard>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
