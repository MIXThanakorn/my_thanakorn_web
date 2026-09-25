import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="site-shell">
        <AnimatedSection className="contact-card">
          <p className="section-kicker" style={{ color: "#176b4d" }}>Start a conversation</p>
          <h2 className="contact-title">Have an idea? Let’s make it real.</h2>
          <div className="contact-row">
            <p className="contact-copy">
              I’m open to internships, junior developer roles, and collaborations where I can learn, contribute, and build something useful.
            </p>
            <a className="button contact-button" href="mailto:kjn09402@gmail.com">
              kjn09402@gmail.com <ArrowUpRight size={17} />
            </a>
          </div>
        </AnimatedSection>
        <footer className="footer">
          <span>© {new Date().getFullYear()} Thanakorn Thongpraiwan</span>
          <div className="footer-links">
            <a href="https://github.com/MIXThanakorn" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://instagram.com/lnw_mix" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com/thanakron.thong" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
