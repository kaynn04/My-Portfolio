import type { Metadata } from "next";
import Link from "next/link";
import RevealCard from "@/components/reveal-card";

import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Kyan Oclares",
  description:
    "Selected software, web, mobile, and AI projects by Kyan Oclares.",
};

export default function ProjectsPage() {
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
            <span className="spider:hidden">Selected work</span>
            <span className="hidden spider:inline">Featured Missions</span>
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            <span className="spider:hidden">
              A collection of full-stack, mobile, and web projects focused on
              practical problems and thoughtful implementation.
            </span>
            <span className="hidden spider:inline">
              A mission archive of full-stack, mobile, and web builds made to
              solve practical problems with precision.
            </span>
          </p>
        </header>

        <div className="space-y-4">
          {projects.map((project) => (
            <RevealCard key={project.name}>
              <article
                key={project.name}
                className="rounded-3xl border border-line bg-surface p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold">{project.name}</h2>
                  <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {project.type}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-muted">
                  {project.description}
                </p>
                <p className="mt-4 text-sm leading-6 text-foreground/80">
                  {project.contribution}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-surface-hover px-3 py-1 text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            </RevealCard>
          ))}
        </div>
      </div>
    </main>
  );
}
