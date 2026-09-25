import { ArrowDownRight, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SignalPath from "./SignalPath";
import SignalStatus from "./SignalStatus";

export default function ProfileSection() {
  return (
    <section className="hero" id="top">
      <div className="site-shell hero-grid">
        <AnimatedSection className="hero-content">
          <p className="hero-label"><span>SYS.01</span> PERSONAL DIGITAL PLAYGROUND</p>
          <h1 className="hero-title">
            Hey, I’m <span>Thanakorn.</span>
          </h1>
          <p className="hero-statement">
            I build things with code — and make them feel like mine.
          </p>
          <p className="hero-copy">
            Computer Science student exploring web, mobile, and data through
            projects I can learn from and actually use.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              See what I’ve built <ArrowDownRight size={17} />
            </a>
            <a
              className="button button-quiet"
              href="https://github.com/MIXThanakorn"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
          <div className="hero-meta" aria-label="Areas of interest">
            <span>WEB</span><i /><span>MOBILE</span><i /><span>DATA</span>
          </div>
        </AnimatedSection>

        <AnimatedSection className="hero-signal-wrap" delay={1}>
          <div className="signal-window">
            <div className="signal-window-bar">
              <span>signal_path.ts</span>
              <span>LIVE</span>
            </div>
            <SignalPath />
            <div className="signal-readout">
              <span>STATUS</span>
              <SignalStatus />
            </div>
          </div>
        </AnimatedSection>
      </div>
      <div className="hero-scroll-note">SCROLL TO EXPLORE <ArrowDownRight size={14} /></div>
    </section>
  );
}
