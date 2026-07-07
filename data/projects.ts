export const projects = [
  {
    name: "Kasulatan",
    type: "Full-stack",
    description:
      "A digital agreement platform for creating, reviewing, signing, and finalizing private transaction agreements.",
    contribution:
      "Built authentication, database models, e-signature validation, audit logs, and PDF agreement summaries.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    name: "Synop",
    type: "Mobile",
    description:
      "A cross-platform personal inventory app for tracking belongings across rooms, containers, and categories.",
    contribution:
      "Designed workflows for lending, packing checklists, barcode scanning, photos, and reminders.",
    technologies: ["React Native", "Expo", "TypeScript", "SQLite"],
  },
  {
    name: "Pasada",
    type: "Mobile & Web",
    description:
      "An Android booking and delivery system with a separate web-based administration dashboard.",
    contribution:
      "Worked as the primary front-end and secondary back-end developer.",
    technologies: ["Java", "Android", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Galactic Grid",
    type: "Web Game",
    description:
      "An expanded tic-tac-toe game featuring interactive gameplay and a computer-controlled opponent.",
    contribution:
      "Implemented custom game logic and database-backed game functionality.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
] as const;
