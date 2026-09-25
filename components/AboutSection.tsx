import AnimatedSection from "./AnimatedSection";
import SignalPath from "./SignalPath";

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="site-shell about-grid">
        <AnimatedSection className="about-aside">
          <p className="section-index">02 / ABOUT</p>
          <SignalPath compact className="about-signal" />
        </AnimatedSection>
        <AnimatedSection className="about-content" delay={1}>
          <p className="about-lead">
            Hey, I’m Thanakorn — a Computer Science student who likes turning
            ideas into things I can actually use.
          </p>
          <div className="about-notes">
            <p>
              Most of my time goes into web and mobile projects. I enjoy the
              whole process: figuring out the problem, connecting the pieces,
              and making the final interface feel clear.
            </p>
            <p>
              Right now I’m exploring Next.js, React Native, Supabase, Python,
              and how data can make products more useful.
            </p>
          </div>
          <div className="about-status">
            <span className="pulse-dot" />
            Curious, building, and open to learning what comes next.
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
