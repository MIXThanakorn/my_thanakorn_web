import Image from "next/image";
import { ArrowUpRight, Footprints, ShoppingBag } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SignalPath from "./SignalPath";

const projects = [
  {
    number: "01",
    title: "Track Your Task",
    category: "WEB APP",
    description: "A task-management app for keeping work, plans, and daily priorities in one clear place.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/MIXThanakorn/next-track-your-task-app",
    image: "/project_01.png",
    layout: "project-wide",
  },
  {
    number: "02",
    title: "Run Tracker",
    category: "MOBILE",
    description: "A mobile running companion built while exploring Expo, React Native, and Supabase.",
    tags: ["React Native", "Expo", "Supabase"],
    github: "https://github.com/MIXThanakorn/rn-run-tracker-app",
    visual: "run",
    layout: "project-tall",
  },
  {
    number: "03",
    title: "Mental Health Analyzer",
    category: "DATA / NLP",
    description: "A project that uses natural language processing to explore social-media signals and mental-health trends.",
    tags: ["Python", "NLP", "Data Analysis", "Machine Learning"],
    github: "https://github.com/Chanachai04/mental-health",
    image: "/project_02.png",
    layout: "project-tall",
  },
  {
    number: "04",
    title: "LocoMall",
    category: "MOBILE",
    description: "A cross-platform marketplace experiment with authentication, media handling, and a Supabase backend.",
    tags: ["Expo", "React Native", "Supabase", "TypeScript"],
    github: "https://github.com/MIXThanakorn/locomall",
    visual: "market",
    layout: "project-wide",
  },
] as const;

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  if ("image" in project) {
    return (
      <div className="project-visual project-image">
        <Image
          alt={`${project.title} interface preview`}
          fill
          loading="eager"
          sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 58vw"
          src={project.image}
          unoptimized
        />
        <SignalPath compact className="project-signal-overlay" />
      </div>
    );
  }

  return (
    <div className={`project-visual project-generated ${project.visual}`} aria-hidden="true">
      <SignalPath compact className="project-signal-overlay" />
      {project.visual === "run" ? (
        <div className="app-glyph">
          <Footprints size={38} />
          <span>06.42 KM</span>
        </div>
      ) : (
        <div className="market-mock">
          <ShoppingBag size={28} />
          <strong>LOCAL<br />FINDS</strong>
          <span>01 — 04</span>
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="section work-section" id="work">
      <div className="site-shell">
        <AnimatedSection className="section-head">
          <div>
            <p className="section-index">01 / SELECTED WORK</p>
            <h2 className="section-title">Things I’ve actually built.</h2>
          </div>
          <p className="section-intro">
            Web, mobile, and data projects — each one taught me something different.
          </p>
        </AnimatedSection>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <AnimatedSection
              className={`project-card ${project.layout}`}
              delay={(index % 2) as 0 | 1}
              key={project.title}
            >
              <article>
                <ProjectVisual project={project} />
                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-number">{project.number}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="tags">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <a
                      aria-label={`View ${project.title} repository`}
                      className="project-action"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open project <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="all-projects">
          <span>MORE EXPERIMENTS LIVE ON GITHUB</span>
          <a href="https://github.com/MIXThanakorn?tab=repositories" target="_blank" rel="noreferrer">
            Browse all repositories <ArrowUpRight size={16} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
