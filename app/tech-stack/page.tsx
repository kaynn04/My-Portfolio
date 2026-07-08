import type { Metadata } from "next";
import Link from "next/link";
import RevealCard from "@/components/reveal-card";

import { techStack } from "@/data/tech-stack";

export const metadata: Metadata = {
  title: "Tech Stack | Kyan Oclares",
  description:
    "Technologies and development tools used by Kyan Oclares across web, mobile, backend, and AI projects.",
};

export default function TechStackPage() {
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
          <p className="text-sm font-medium text-accent">
            <span className="spider:hidden">Tools and technologies</span>
            <span className="hidden spider:inline">Web Arsenal</span>
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="spider:hidden">Tech Stack</span>
            <span className="hidden spider:inline">
              Gadgets behind the suit
            </span>
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-muted">
            <span className="spider:hidden">
              Technologies I use to build full-stack web applications,
              cross-platform mobile experiences, and practical AI integrations.
            </span>
            <span className="hidden spider:inline">
              The web tools, backend systems, mobile kits, and AI gear packed
              into my developer suit.
            </span>
          </p>
        </header>

        <div className="space-y-4">
          {techStack.map((group, index) => (
            <RevealCard key={group.category}>
              <section
                  className="rounded-3xl border border-line bg-surface p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-lg font-medium">{group.category}</h2>

                    <span className="font-mono text-xs text-muted">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-line bg-background/50 px-4 py-2 text-sm text-foreground/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
            </RevealCard>
          ))}
        </div>
      </div>
    </main>
  );
}
