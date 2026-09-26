export type Project = {
  id: string;
  title: string;
  category: "WEB" | "MOBILE" | "DATA";
  year: string;
  status: string;
  description: string;
  problem: string;
  concept: string;
  technologies: readonly string[];
  source: string;
  image?: string;
  visual: "interface" | "runner" | "neural" | "market";
};

export const projects: readonly Project[] = [
  {
    id: "track-your-task",
    title: "Track Your Task",
    category: "WEB",
    year: "—",
    status: "PLAYABLE BUILD",
    description: "A focused task-management app for plans, priorities, and everyday work.",
    problem: "Keep daily work visible without turning planning into more work.",
    concept: "A clear workspace that brings tasks, plans, and priorities into one flow.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    source: "https://github.com/MIXThanakorn/next-track-your-task-app",
    image: "/project_01.png",
    visual: "interface",
  },
  {
    id: "run-tracker",
    title: "Run Tracker",
    category: "MOBILE",
    year: "—",
    status: "EXPERIMENT",
    description: "A mobile running companion created while exploring location-aware products.",
    problem: "Turn running activity into a simple, readable mobile experience.",
    concept: "A pocket-sized running log built around the metrics that matter in motion.",
    technologies: ["React Native", "Expo", "Supabase"],
    source: "https://github.com/MIXThanakorn/rn-run-tracker-app",
    visual: "runner",
  },
  {
    id: "mental-health-analyzer",
    title: "Mental Health Analyzer",
    category: "DATA",
    year: "—",
    status: "RESEARCH BUILD",
    description: "An NLP project exploring social-media signals and mental-health trends.",
    problem: "Explore how language in public social content can be studied systematically.",
    concept: "A search and analysis workflow connecting collected text with NLP exploration.",
    technologies: ["Python", "NLP", "Data Analysis", "Machine Learning"],
    source: "https://github.com/Chanachai04/mental-health",
    image: "/project_02.png",
    visual: "neural",
  },
  {
    id: "locomall",
    title: "LocoMall",
    category: "MOBILE",
    year: "—",
    status: "PROTOTYPE",
    description: "A cross-platform marketplace experiment with auth, media, and a backend.",
    problem: "Connect marketplace discovery and listing flows in a mobile-first product.",
    concept: "A local marketplace prototype built to learn the complete product loop.",
    technologies: ["Expo", "React Native", "Supabase", "TypeScript"],
    source: "https://github.com/MIXThanakorn/locomall",
    visual: "market",
  },
] as const;

export const equipment = [
  { name: "NEXT.JS", category: "FRAMEWORK", description: "Full-stack React applications and production web interfaces.", code: "NX-01" },
  { name: "TYPESCRIPT", category: "LANGUAGE", description: "Predictable application code with explicit, reusable types.", code: "TS-02" },
  { name: "REACT", category: "INTERFACE", description: "Component systems for interactive web products.", code: "RC-03" },
  { name: "REACT NATIVE", category: "MOBILE", description: "Cross-platform mobile experiences and prototypes.", code: "RN-04" },
  { name: "SUPABASE", category: "BACKEND", description: "Authentication, data, storage, and realtime product foundations.", code: "SB-05" },
  { name: "PYTHON", category: "DATA", description: "Data exploration, NLP experiments, and practical automation.", code: "PY-06" },
  { name: "TAILWIND", category: "STYLING", description: "Fast, consistent interface styling and responsive systems.", code: "TW-07" },
  { name: "GIT", category: "WORKFLOW", description: "Versioned experiments, collaboration, and project history.", code: "GT-08" },
] as const;

export const achievements = [
  { date: "2024", title: "ITPE — Level IP", issuer: "Career for the Future Academy", description: "Foundational international-standard IT proficiency.", mark: "IP" },
  { date: "2024", title: "ICDL Digital Challenge", issuer: "ICDL Thailand", description: "Recognition for digital literacy and practical technology skills.", mark: "DC" },
  { date: "2025", title: "2nd Place — MOS Olympic Thailand", issuer: "Microsoft Word · ARIT", description: "Second place in the Microsoft Word category.", mark: "02" },
] as const;

export const journey = [
  { chapter: "01", date: "ORIGIN", title: "Learning through building", description: "Starting with code, then turning each new idea into something tangible enough to test and improve." },
  { chapter: "02", date: "2024", title: "Foundations unlocked", description: "Strengthened practical digital skills through ITPE and the ICDL Digital Challenge." },
  { chapter: "03", date: "2025", title: "A competitive milestone", description: "Placed second in the Microsoft Word category at MOS Olympic Thailand." },
  { chapter: "04", date: "CURRENT", title: "The builder chapter", description: "Exploring web, mobile, data, and product thinking through projects that solve real problems." },
] as const;
