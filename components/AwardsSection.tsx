import AnimatedSection from "./AnimatedSection";
import { Trophy, Medal, Star } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "2ND Place — MOS Olympic Thailand Competition 2025",
    organization: "ARIT CO.,LTD.",
    year: "2025",
    description:
      "2nd place in the MOS Olympic Thailand Competition 2025 in the Microsoft Word category, showcasing exceptional skills in Microsoft Office applications and demonstrating a high level of proficiency and dedication to excellence.",
  },
  {
    icon: Medal,
    title: "ICDL Digital Challenge 2024",
    organization: "ICDL Thailand",
    year: "2024",
    description:
      "Received for outstanding performance in the ICDL Digital Challenge 2024, demonstrating advanced digital literacy and technical skills. This award recognizes excellence in utilizing digital tools and technologies effectively.",
  },
  {
    icon: Star,
    title: "Information Technology Professional Examination (ITPE) — Level IP",
    organization: "Career for the Future Academy",
    year: "2024",
    description:
      "An international-standard IT proficiency exam with three levels. Passed the first level (IP), demonstrating foundational knowledge and skills in information technology and commitment to professional development.",
  },
];

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className="relative z-10"
      style={{
        paddingTop: "clamp(3.5rem, 9vw, 6.5rem)",
        paddingBottom: "clamp(4rem, 10vw, 8rem)",
        paddingLeft: "clamp(1.25rem, 6vw, 2.5rem)",
        paddingRight: "clamp(1.25rem, 6vw, 2.5rem)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <AnimatedSection style={{ marginBottom: "clamp(1.75rem, 5vw, 3rem)" }}>
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Awards &amp; Achievements</h2>
          <div className="section-divider" />
        </AnimatedSection>

        {/* Milestone Awards Timeline Container */}
        <div className="timeline-container">
          {/* Vertical Path */}
          <div className="timeline-line" />

          {awards.map((award, i) => {
            const Icon = award.icon;
            return (
              <AnimatedSection
                key={award.title}
                delay={(i % 3) as 0 | 1 | 2 | 3}
                className="timeline-item"
              >
                {/* Glowing Node */}
                <div className="timeline-node">
                  <Icon size={16} />
                </div>

                {/* Content Card */}
                <div
                  className="card"
                  style={{
                    padding: "clamp(1.1rem, 3.2vw, 1.65rem)",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Title + Year */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "baseline",
                        gap: "0.5rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "Fraunces, Georgia, serif",
                          fontWeight: 400,
                          fontSize: "clamp(0.98rem, 2.5vw, 1.15rem)",
                          color: "var(--text-primary)",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.3,
                        }}
                      >
                        {award.title}
                      </h3>
                      <span
                        className="tag"
                        style={{ fontSize: "0.68rem", flexShrink: 0 }}
                      >
                        {award.year}
                      </span>
                    </div>

                    {/* Organization */}
                    <p
                      style={{
                        fontSize: "clamp(0.7rem, 1.8vw, 0.78rem)",
                        fontWeight: 600,
                        color: "var(--accent-soft)",
                        marginBottom: "0.45rem",
                        letterSpacing: "0.03em",
                        textTransform: "uppercase",
                      }}
                    >
                      {award.organization}
                    </p>

                    {/* Description */}
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "clamp(0.78rem, 1.8vw, 0.85rem)",
                        lineHeight: 1.8,
                      }}
                    >
                      {award.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
