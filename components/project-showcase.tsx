"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { projects } from "@/data/projects";

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % projects.length;
      });
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="group/project-card flex min-h-[28rem] flex-col rounded-3xl border border-line bg-surface p-8 transition-colors duration-200 hover:border-accent/40 sm:min-h-[27rem] md:min-h-[26rem]">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-muted">
          <span className="spider:hidden">Selected Work</span>
          <span className="hidden spider:inline">Featured Missions</span>
        </p>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
        >
          <span
            className="text-accent transition-transform group-hover/project-card:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>

      <Link
        key={project.name}
        href="/projects"
        aria-label="View all projects"
        className="group mt-9 flex flex-1 flex-col overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-full text-3xl font-semibold tracking-tight transition-colors group-hover:text-accent-strong sm:max-w-[70%]">
            {project.name}
          </h2>

          <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs text-muted">
            {project.type}
          </span>
        </div>

        <p className="mt-5 line-clamp-3 max-w-2xl text-sm leading-6 text-muted">
          {project.description}
        </p>

        <p className="mt-4 line-clamp-3 max-w-2xl text-sm leading-6 text-foreground/80">
          {project.contribution}
        </p>

        <div className="mt-6 flex flex-wrap gap-2 overflow-hidden">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-surface-hover px-3 py-1 text-xs"
            >
              {technology}
            </span>
          ))}
        </div>
      </Link>

      <div
        className="mt-7 flex items-center justify-start gap-3 border-t border-line pt-6"
        aria-label="Choose a project"
      >
        {projects.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${item.name}`}
            aria-current={activeIndex === index ? "true" : undefined}
            title={item.name}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              activeIndex === index
                ? "scale-125 bg-accent"
                : "bg-accent/30 hover:bg-accent/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
