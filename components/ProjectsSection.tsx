import AnimatedSection from "./AnimatedSection";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Track Your Task",
    description:
      "A task management app that helps you organize and prioritize your work. Built with Next.js, TypeScript, and Tailwind CSS, it features a clean interface, drag-and-drop functionality, and real-time updates. Perfect for boosting productivity and staying on top of your to-do list.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/MIXThanakorn/next-track-your-task-app",
    image: "/project_01.png",
  },
  {
    title: "Mahidol University Social Media Mental Health Analyzer",
    description:
      "A project that analyzes social media data to assess mental health trends among users from X and Instragram. Using Python, data analysis, and machine learning techniques.",
    tags: ["Python", "Data Analysis", "Machine Learning"],
    github: "https://github.com/Chanachai04/mental-health",
    image: "/project_02.png",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10"
      style={{
        paddingTop: "clamp(3.5rem, 9vw, 6.5rem)",
        paddingBottom: "clamp(3.5rem, 9vw, 6.5rem)",
        paddingLeft: "clamp(1.25rem, 6vw, 2.5rem)",
        paddingRight: "clamp(1.25rem, 6vw, 2.5rem)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <AnimatedSection style={{ marginBottom: "clamp(1.75rem, 5vw, 3rem)" }}>
          <p className="section-label">What I Have Built</p>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(1rem, 3vw, 1.75rem)",
            alignItems: "start",
          }}
        >
          {projects.map((project, i) => (
            <AnimatedSection
              key={project.title}
              delay={(i % 3) as 0 | 1 | 2 | 3}
              style={{ height: "100%" }}
            >
              <div
                className="card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "clamp(1rem, 3vw, 1.5rem)",
                }}
              >
                {/* Preview placeholder */}
                <div
                  style={{
                    width: "100%",
                    height: "clamp(130px, 20vw, 165px)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "1rem",
                    flexShrink: 0,
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                  }}
                />

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.35rem",
                    marginBottom: "0.65rem",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag"
                      style={{ fontSize: "0.67rem" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "Fraunces, Georgia, serif",
                    fontWeight: 400,
                    fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                    color: "var(--text-primary)",
                    marginBottom: "0.45rem",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "clamp(0.78rem, 1.8vw, 0.85rem)",
                    lineHeight: 1.8,
                    flexGrow: 1,
                    marginBottom: "1.1rem",
                  }}
                >
                  {project.description}
                </p>

                {/* Links */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginTop: "auto",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    style={{ fontSize: "0.78rem", padding: "0.42rem 0.85rem" }}
                  >
                    <Github size={13} />
                    Code
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
