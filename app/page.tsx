import AwardsSection from "@/components/AwardsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import PlaygroundEffects from "@/components/PlaygroundEffects";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection";
import ToolboxSection from "@/components/ToolboxSection";

export default function Home() {
  return (
    <main>
      <PlaygroundEffects />
      <Navbar />
      <ProfileSection />
      <ProjectsSection />
      <AboutSection />
      <ToolboxSection />
      <AwardsSection />
      <ContactSection />
    </main>
  );
}
