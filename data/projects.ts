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
  {
    name: "AI Agentic Workflow Automation",
    type: "Internship Project",
    description:
      "An AI workflow automation project built during my internship at MySchoolSuite Philippines to support executive and operational tasks.",
    contribution:
      "Deployed OpenClaw agentic frameworks and built custom API tool integrations for X/Twitter and Jira.",
    technologies: ["OpenClaw", "X/Twitter API", "Jira API", "API Integration", "AI Agents"],
  },
  {
    name: "Real-Time AI Persona Backend",
    type: "Internship Project",
    description:
      "An AI backend system built during my internship to support real-time voice interactions and dynamic AI persona generation.",
    contribution:
      "Architected WebSocket communication, integrated Gemini Flash Live, and developed onboarding pipelines for dynamic AI persona workflows.",
    technologies: ["Gemini Flash Live", "WebSocket", "AI Backend", "API Integration", "Onboarding Pipelines"],
  },
  {
    name: "Google Sheets API Integration",
    type: "Internship Project",
    description:
      "A data integration project built during my QE360 internship to streamline data exchange between spreadsheets and application features.",
    contribution:
      "Built a Google Sheets API integration and validated related UI/UX implementations against Figma mockups.",
    technologies: ["Google Sheets API", "JavaScript", "API Integration", "Figma", "UI/UX Testing"],
  },

] as const;
