import { Award, Clock3, FileText, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import ProjectShowcase from "@/components/project-showcase";
import RadarPulse from "@/components/radar-pulse";
import NewtonsCradle from "@/components/newtons-cradle";
import RevealCard from "@/components/reveal-card";
import HeroName from "@/components/hero-name";
import PortraitCard from "@/components/portrait-card";
import Link from "next/link";

import {
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-12">
        <RevealCard className="md:col-span-6">
        <section className="relative flex h-full items-center overflow-hidden rounded-3xl border border-line bg-surface p-8 md:p-10">
          <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative">
            <div className="mb-8 flex items-center gap-4 text-sm text-muted">
              <RadarPulse />
              Available for opportunities
            </div>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              <HeroName />
            </h1>

            <p className="mt-5 max-w-2xl text-xl leading-8 text-muted">
              Aspiring Software Engineer, Web Developer, and AI Engineer.
            </p>
          </div>
        </section>
        </RevealCard>

        <RevealCard className="md:order-first md:col-span-3">
        <PortraitCard />
        </RevealCard>

        <RevealCard className="md:col-span-3">
        <aside className="flex h-full flex-col justify-between rounded-3xl border border-line bg-surface p-7">
          <p className="text-sm text-muted">Based in</p>

          <div className="my-10 space-y-5">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-accent" aria-hidden="true" />
              <p className="text-lg font-medium">Philippines</p>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 size={20} className="text-accent" aria-hidden="true" />
              <p className="text-sm text-muted">UTC+8 · Remote friendly</p>
            </div>
          </div>

          <p className="text-sm text-muted">Available for global teams</p>
        </aside>
        </RevealCard>

        {/* Featured Project Section */}
        <RevealCard className="md:col-span-9">
          <ProjectShowcase />
        </RevealCard>

        <RevealCard className="md:col-span-3">
        <Link
          href="/certificates"
          className="group/certificate flex h-full flex-col justify-between rounded-3xl border border-line bg-surface p-7 transition-all hover:border-accent/40"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">Certificates</p>
            <span className="text-accent transition-transform group-hover/certificate:translate-x-1">
              →
            </span>
          </div>

          <div className="my-10">
            <Award size={34} className="text-accent" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-medium">Credentials</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Courses and professional learning.
            </p>
          </div>

          <p className="text-xs text-muted">View certificates</p>
        </Link>
        </RevealCard>

        <RevealCard className="md:col-span-5">
        <Link
          href="/tech-stack"
          className="group/card flex h-full flex-col rounded-3xl border border-line bg-surface p-8 transition-colors duration-200 hover:border-accent/40"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted">Tech Stack</p>
              <h2 className="mt-2 text-xl font-medium">Tools I build with</h2>
            </div>

            <span className="inline-flex items-center gap-2 text-sm text-accent transition-colors group-hover/card:text-accent-strong">
              <span className="transition-transform group-hover/card:translate-x-1">
                → 
              </span>
            </span>
          </div>

          <div className="mt-8 grid flex-1 grid-cols-2 gap-3">
            {[
              { name: "TypeScript", icon: SiTypescript },
              { name: "Next.js", icon: SiNextdotjs },
              { name: "React", icon: SiReact },
              { name: "Node.js", icon: SiNodedotjs },
              { name: "PostgreSQL", icon: SiPostgresql },
              { name: "Python", icon: SiPython },
            ].map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="group/tile flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-background/50 text-muted transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/10 hover:text-accent-strong"
              >
                <Icon
                  size={30}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover/tile:scale-110"
                />

                <span className="text-sm">{name}</span>
              </div>
            ))}
          </div>
        </Link>
        </RevealCard>

        {/* Experience section */}
        <RevealCard className="md:col-span-7">
        <section className="h-full rounded-3xl border border-line bg-surface p-6">
          <p className="text-sm text-muted">Experience</p>

          <div className="mt-6">
            <div>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-medium">AI Developer Intern</h3>
                  <p className="mt-1 text-sm text-muted">MySchool · Remote</p>
                </div>

                <p className="text-xs text-muted">Mar–Jun 2026</p>
              </div>

              <p className="mt-4 text-sm leading-6 text-muted">
                Built AI workflow integrations for X and Jira, then helped
                architect a real-time AI backend supporting voice interactions
                and dynamic persona generation.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {["AI Agents", "API Integrations", "WebSockets", "LLMs"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-surface-hover px-2.5 py-1 text-xs text-foreground/80"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="my-6 h-px bg-surface-hover" />

            <div>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-medium">Junior QA Engineer Intern</h3>
                  <p className="mt-1 text-sm text-muted">QE360 · Remote</p>
                </div>

                <p className="text-xs text-muted">Nov 2025–Feb 2026</p>
              </div>

              <p className="mt-4 text-sm leading-6 text-muted">
                Tested web and mobile applications, documented critical issues,
                verified interfaces against Figma, and built a Google Sheets API
                data integration.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Exploratory Testing",
                  "API Testing",
                  "Agile",
                  "Bug Reporting",
                  "Test Planning",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-surface-hover px-2.5 py-1 text-xs text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        </RevealCard>

        <RevealCard className="md:col-span-9">
        <section className="rounded-3xl border border-line bg-surface p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted">Find me online</p>
              <h2 className="mt-2 text-2xl font-medium">Let&apos;s connect</h2>
            </div>

            <p className="hidden text-sm text-muted sm:block">
              Open to roles and collaborations
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              {
                label: "GitHub",
                href: "https://github.com/kaynn04",
                icon: FaGithub,
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/kyan-oclares-47127316b/",
                icon: FaLinkedinIn,
              },
              {
                label: "Email",
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=koclares2003@gmail.com",
                icon: Mail,
              },
              {
                label: "Resume",
                href: "/Kyan_Oclares_Resume.pdf",
                icon: FileText,
              },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex min-h-36 flex-col items-center justify-center gap-4 rounded-3xl border border-line bg-background/50 text-muted transition-all hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-strong"
              >
                <Icon
                  size={34}
                  aria-hidden="true"
                  className="transition-transform group-hover/link:scale-110"
                />
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </div>
        </section>
        </RevealCard>

        <RevealCard className="md:col-span-3">
        <section className="h-full rounded-3xl border border-line bg-surface p-6">
          <NewtonsCradle />
        </section>
        </RevealCard>
      </div>
    </main>
  );
}
