import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ProfileSection />
      <ProjectsSection />
      <AwardsSection />
      <ContactSection />
    </main>
  );
}
