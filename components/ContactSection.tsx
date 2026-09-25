import { ArrowUpRight, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SignalPath from "./SignalPath";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="site-shell">
        <AnimatedSection className="contact-panel">
          <div className="contact-copy">
            <p className="section-index">05 / SAY HELLO</p>
            <h2>Got something in mind?</h2>
            <p>
              A project, an internship, or just a good idea — send it my way.
              I’m always happy to talk about building things.
            </p>
            <a className="button button-primary" href="mailto:kjn09402@gmail.com">
              <Mail size={17} /> Send me an email <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="contact-signal">
            <SignalPath />
            <span>END OF LINE? NOT REALLY.</span>
          </div>
        </AnimatedSection>

        <footer className="footer">
          <div>
            <strong>TT</strong>
            <span>Thanakorn’s personal digital playground.</span>
          </div>
          <div className="footer-links">
            <a href="mailto:kjn09402@gmail.com">Email</a>
            <a href="https://github.com/MIXThanakorn" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://instagram.com/lnw_mix" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com/thanakron.thong" target="_blank" rel="noreferrer">Facebook</a>
          </div>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
    </section>
  );
}
