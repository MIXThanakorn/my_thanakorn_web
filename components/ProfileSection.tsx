import Image from "next/image";
import { ArrowDownRight, Github, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skills = ["Next.js", "TypeScript", "React Native", "Supabase", "Python", "Machine Learning"];

export default function ProfileSection() {
  return (
    <>
      <section className="hero" id="top">
        <div className="site-shell hero-grid">
          <AnimatedSection>
            <p className="eyebrow">Developer portfolio · Bangkok</p>
            <h1 className="hero-title">
              I turn ideas into <em>useful</em> digital products.
            </h1>
            <p className="hero-copy">
              I’m Thanakorn, a Computer Science student and junior developer building thoughtful web,
              mobile, and data-driven experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-secondary" href="mailto:kjn09402@gmail.com">
                <Mail size={16} /> Let’s talk
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/MIXThanakorn"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div className="portrait-card">
              <div className="portrait-frame">
                <Image
                  src="/profile_img.jpg"
                  alt="Thanakorn Thongpraiwan"
                  fill
                  priority
                  sizes="(max-width: 920px) 390px, 34vw"
                />
              </div>
              <div className="portrait-note">
                <strong><span className="status-dot" /> Open to opportunities</strong>
                <span>Internship · Junior developer · Collaboration</span>
              </div>
              <div className="portrait-sticker">build<br />learn<br />repeat</div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="skill-strip" aria-label="Core technologies">
        <ul className="skill-list">
          {skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </div>

      <section className="section" id="about">
        <div className="site-shell about-grid">
          <AnimatedSection>
            <p className="about-label">A little about me</p>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <p className="about-copy">
              Curious by nature, practical by choice. I enjoy taking a problem from a rough idea to a
              product people can actually <em>understand and use.</em>
            </p>
            <div className="capabilities">
              <div className="capability">
                <span className="capability-number">01</span><strong>Web development</strong><span>Next.js · React · TypeScript</span>
              </div>
              <div className="capability">
                <span className="capability-number">02</span><strong>Mobile applications</strong><span>React Native · Expo · Flutter</span>
              </div>
              <div className="capability">
                <span className="capability-number">03</span><strong>Data &amp; backend</strong><span>Python · Supabase · Machine Learning</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
