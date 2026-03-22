import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";

const Divider = () => (
  <div
    style={{
      maxWidth: "5xl",
      margin: "0 auto",
      padding: "0 clamp(1.25rem, 5vw, 2rem)",
    }}
  >
    <div
      style={{
        height: "1px",
        background: "var(--border-color)",
        borderRadius: "1px",
      }}
    />
  </div>
);

export default function Home() {
  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      <Navbar />
      <ProfileSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <AwardsSection />

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1.25rem, 5vw, 2rem)",
          color: "var(--text-muted)",
          fontSize: "clamp(0.72rem, 1.6vw, 0.8rem)",
          fontWeight: 500,
          letterSpacing: "0.06em",
          borderTop: "1px solid var(--border-color)",
        }}
      >
        © {new Date().getFullYear()} {""} Thanakorn Thongpraiwan · Built with
        Next.js &amp; Tailwind CSS
      </footer>
    </main>
  );
}
