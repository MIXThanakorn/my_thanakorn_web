import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import {
  Mail,
  Phone,
  Github,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

const contacts = [
  {
    label: "Email",
    href: "mailto:kjn09402@gmail.com",
    display: "kjn09402@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+66631956821",
    display: "063-195-6821",
    icon: Phone,
  },
  {
    label: "GitHub",
    href: "https://github.com/MIXThanakorn",
    display: "MIXThanakorn",
    icon: Github,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/thanakron.thong",
    display: "Thanakorn Thong",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/lnw_mix",
    display: "@lnw_mix",
    icon: Instagram,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/626288353767063552",
    display: "lnwmixza007",
    icon: MessageCircle,
  },
];

export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="relative overflow-hidden z-10"
      style={{
        paddingTop: "clamp(5.5rem, 14vw, 9rem)",
        paddingBottom: "clamp(3rem, 8vw, 6rem)",
        paddingLeft: "clamp(1.25rem, 6vw, 2.5rem)",
        paddingRight: "clamp(1.25rem, 6vw, 2.5rem)",
      }}
    >
      {/* Drifting Ambient Background Glow Orbs */}
      <div className="bg-glow-orb-1" style={{ top: "8%", left: "12%" }} />
      <div className="bg-glow-orb-2" style={{ bottom: "10%", right: "8%" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* ── Hero Row: stack on mobile, row on sm+ ── */}
        <AnimatedSection>
          <div
            className="hero-row"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(1.25rem, 4vw, 2.5rem)",
              marginBottom: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            {/* Avatar with Halo effect */}
            <div
              className="avatar-placeholder"
              style={{
                width: "clamp(88px, 20vw, 120px)",
                height: "clamp(88px, 20vw, 120px)",
                flexShrink: 0,
                overflow: "hidden",
                padding: 0,
                borderRadius: "50%",
                border: "3px solid var(--border)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <Image
                src="/profile_img.jpg"
                alt="Thanakorn Thongpraiwan"
                width={120}
                height={120}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease",
                }}
                className="hover:scale-110"
              />
            </div>

            {/* Name + Role + Bio */}
            <div
              className="hero-text"
              style={{ flex: 1, minWidth: 0, width: "100%" }}
            >
              {/* Pulse Available Badge */}
              <div className="status-badge">
                <span className="status-dot animate-pulse"></span>
                Available for opportunities
              </div>

              <p className="section-label" style={{ textAlign: "left" }}>
                Portfolio
              </p>

              <h1
                style={{
                  fontFamily: "Fraunces, Georgia, serif",
                  fontSize: "clamp(2rem, 7vw, 3.75rem)",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  marginTop: "0.2rem",
                  marginBottom: "0.35rem",
                  textAlign: "left",
                }}
              >
                Thanakorn <span className="gradient-text">Thongpraiwan</span>
              </h1>

              <p
                style={{
                  fontSize: "clamp(0.8rem, 2.5vw, 0.92rem)",
                  fontWeight: 400,
                  color: "var(--text-muted)",
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "0.01em",
                  marginBottom: "clamp(1rem, 3vw, 1.5rem)",
                  textAlign: "left",
                }}
              >
                Junior Developer | Computer Science Student
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Contact Grid ── */}
        <AnimatedSection delay={1}>
          <p
            className="section-label"
            style={{ marginBottom: "clamp(0.6rem, 2vw, 0.9rem)" }}
          >
            Contact &amp; Social
          </p>
          <div
            style={{
              display: "grid",
              /* 1 col on tiny screens, 2 col on ~480px+, stays 2-3 col on larger */
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 200px), 1fr))",
              gap: "clamp(0.4rem, 1.5vw, 0.6rem)",
            }}
          >
            {contacts.map(({ label, href, display, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`contact-link contact-link-${label.toLowerCase()}`}
                style={{ minWidth: 0 }}
              >
                <Icon
                  size={14}
                  style={{ color: "var(--accent-soft)", flexShrink: 0, transition: "color 0.25s ease" }}
                />
                <span
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    flexShrink: 0,
                    minWidth: "3.2rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    transition: "color 0.25s ease"
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.8rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    transition: "color 0.25s ease"
                  }}
                >
                  {display}
                </span>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
