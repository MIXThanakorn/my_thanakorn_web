import Image from "next/image";
import { ArrowUpRight, Footprints } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Track Your Task",
    description: "A focused task-management experience for planning work and keeping daily priorities visible.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/MIXThanakorn/next-track-your-task-app",
    image: "/project_01.png",
    className: "featured",
  },
  {
    title: "Run Tracker",
    description: "A mobile running companion built with Expo, React Native, and Supabase.",
    tags: ["React Native", "Expo", "Supabase", "TypeScript"],
    github: "https://github.com/MIXThanakorn/rn-run-tracker-app",
    visual: "run",
    className: "compact",
  },
  {
    title: "Mental Health Analyzer",
    description: "A data project applying natural language processing to explore social-media signals and mental-health trends.",
    tags: ["Python", "NLP", "Data Analysis", "Machine Learning"],
    github: "https://github.com/Chanachai04/mental-health",
    image: "/project_02.png",
    className: "compact",
  },
  {
    title: "LocoMall",
    description: "A cross-platform mobile marketplace project with authentication, media handling, and a Supabase backend.",
    tags: ["Expo", "React Native", "Supabase", "TypeScript"],
    github: "https://github.com/MIXThanakorn/locomall",
    visual: "mobile",
    className: "featured",
  },
];

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  if (project.image) {
    return (
      <div className="project-visual">
        <Image src={project.image} alt={`${project.title} interface`} fill sizes="(max-width: 700px) 100vw, 55vw" />
      </div>
    );
  }
  if (project.visual === "run") {
    return (
      <div className="project-visual visual-green" aria-hidden="true">
        <div className="run-path" />
        <div className="run-icon"><Footprints size={42} /></div>
      </div>
    );
  }
  return (
    <div className="project-visual visual-orange" aria-hidden="true">
      <div className="phone-mock">
        <div className="mock-bar" />
        <div className="mock-number">Local finds.</div>
        <div className="mock-card"><div className="mock-bar" /><div className="mock-pill" /></div>
      </div>
      <div className="phone-mock second">
        <div className="mock-bar" />
        <div className="mock-card"><div className="mock-number">฿</div><div className="mock-bar" /></div>
        <div className="mock-pill" />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="section" id="work">
      <div className="site-shell">
        <AnimatedSection className="section-head">
          <div>
            <p className="section-kicker">Selected work · GitHub</p>
            <h2 className="section-title">Things I’ve built.</h2>
          </div>
          <p className="section-intro">
            A selection of web, mobile, and data projects chosen to show how I think across different platforms.
          </p>
        </AnimatedSection>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} className={`project-card ${project.className}`} delay={(index % 2) as 0 | 1}>
              <ProjectVisual project={project} />
              <div className="project-meta">
                <span className="project-number">0{index + 1} / 04</span>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                  View repository <ArrowUpRight size={15} />
                </a>
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <a className="button button-secondary" href="https://github.com/MIXThanakorn?tab=repositories" target="_blank" rel="noreferrer">
            See all repositories <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
