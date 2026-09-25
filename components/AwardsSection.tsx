import { Award, Medal, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const achievements = [
  {
    year: "2024",
    title: "ITPE — Level IP",
    organization: "Career for the Future Academy",
    detail: "Foundational international-standard IT proficiency.",
    icon: Award,
  },
  {
    year: "2024",
    title: "ICDL Digital Challenge",
    organization: "ICDL Thailand",
    detail: "Recognition for digital literacy and practical technology skills.",
    icon: Medal,
  },
  {
    year: "2025",
    title: "2nd Place — MOS Olympic Thailand",
    organization: "Microsoft Word · ARIT",
    detail: "Second place in the Microsoft Word category.",
    icon: Trophy,
  },
];

export default function AwardsSection() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="site-shell">
        <AnimatedSection className="section-head">
          <div>
            <p className="section-index">04 / ACHIEVEMENTS</p>
            <h2 className="section-title">A few good signals.</h2>
          </div>
          <p className="section-intro">
            Small milestones that remind me progress usually comes from showing up and trying again.
          </p>
        </AnimatedSection>

        <div className="achievement-track">
          <div className="achievement-line" aria-hidden="true" />
          {achievements.map(({ year, title, organization, detail, icon: Icon }, index) => (
            <AnimatedSection
              className="achievement-item"
              delay={(index % 3) as 0 | 1 | 2}
              key={title}
            >
              <div className="achievement-node" aria-hidden="true">
                <span>0{index + 1}</span>
                <i />
              </div>
              <div className="achievement-card">
                <div className="achievement-top">
                  <span>{year}</span>
                  <Icon size={19} />
                </div>
                <h3>{title}</h3>
                <strong>{organization}</strong>
                <p>{detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
