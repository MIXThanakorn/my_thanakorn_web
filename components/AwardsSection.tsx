import { Award, Medal, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const awards = [
  { year: "2025", title: "2nd Place — MOS Olympic Thailand", organization: "Microsoft Word · ARIT", icon: Trophy },
  { year: "2024", title: "ICDL Digital Challenge", organization: "ICDL Thailand", icon: Medal },
  { year: "2024", title: "ITPE — Level IP", organization: "Career for the Future Academy", icon: Award },
];

export default function AwardsSection() {
  return (
    <section className="section" id="awards">
      <div className="site-shell">
        <AnimatedSection className="section-head">
          <div>
            <p className="section-kicker">Recognition</p>
            <h2 className="section-title">Milestones that matter.</h2>
          </div>
          <p className="section-intro">Achievements that reflect digital fluency, persistence, and a drive to keep learning.</p>
        </AnimatedSection>
        <div className="awards-list">
          {awards.map(({ year, title, organization, icon: Icon }, index) => (
            <AnimatedSection className="award-row" delay={(index % 3) as 0 | 1 | 2} key={title}>
              <span className="award-year">{year}</span>
              <h3 className="award-title">{title}</h3>
              <span className="award-org">{organization}</span>
              <span className="award-icon"><Icon size={18} /></span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
