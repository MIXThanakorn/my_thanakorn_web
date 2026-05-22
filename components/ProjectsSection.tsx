import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { Github, ArrowUpRight } from "lucide-react";

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
      "A project that analyzes social media data to assess mental health trends among users from X and Instagram. Using Python, data analysis, and machine learning techniques.",
    tags: ["Python", "Data Analysis", "Machine Learning"],
    github: "https://github.com/Chanachai04/mental-health",
    image: "/project_02.png",
  },
];

const getTagClass = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes("next.js")) return "tag-nextjs";
  if (t.includes("typescript")) return "tag-typescript";
  if (t.includes("tailwind")) return "tag-tailwindcss";
  if (t.includes("supabase")) return "tag-supabase";
  if (t.includes("python")) return "tag-python";
  if (t.includes("machine learning") || t.includes("data analysis") || t.includes("ml")) return "tag-ml";
  return "";
};

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
              "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            gap: "clamp(1.25rem, 3.5vw, 2rem)",
            alignItems: "stretch",
          }}
        >
          {projects.map((project, i) => (
            <AnimatedSection
              key={project.title}
              delay={(i % 3) as 0 | 1 | 2 | 3}
              style={{ height: "100%" }}
            >
              <div
                className="card group"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "clamp(1.1rem, 3.2vw, 1.65rem)",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Browser Mockup Frame */}
                  <div className="browser-mockup">
                    <div className="browser-header">
                      <div className="browser-dot red" />
                      <div className="browser-dot yellow" />
                      <div className="browser-dot green" />
                      <div className="browser-address">
                        {project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.dev
                      </div>
                    </div>
                    <div 
                      className="browser-content" 
                      style={{ 
                        width: "100%", 
                        height: "clamp(140px, 20vw, 175px)", 
                        position: "relative" 
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`tag ${getTagClass(tag)}`}
                        style={{ fontSize: "0.68rem" }}
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
                      fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
                      color: "var(--text-primary)",
                      marginBottom: "0.55rem",
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
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.description}
                  </p>
                </div>

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
                    className="contact-link contact-link-github"
                    style={{ 
                      fontSize: "0.78rem", 
                      padding: "0.45rem 1rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem"
                    }}
                  >
                    <Github size={13} />
                    <span>View Repository</span>
                    <ArrowUpRight size={12} style={{ opacity: 0.5 }} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
