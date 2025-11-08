import {ThemeToggle} from "@/components/ThemeToggle.jsx";
import {StarBackground} from "@/components/StarBackground.jsx";
import {Navbar} from "@/components/Navbar.jsx";
import {HeroSection} from "@/components/HeroSection.jsx";
import {AboutSection} from "@/components/AboutSection.jsx";
import {SkillsSection} from "@/components/SkillsSection.jsx";
import {ProjectsSection} from "@/components/ProjectsSection.jsx";
import {ContactSection} from "@/components/ContactSection.jsx";
import {Footer} from "@/components/Footer.jsx";

export const Home = () => {
  return (
      <div className={"min-h-screen bg-background text-foreground overflow-hidden"}>
          {/* Theme toggle */}
          <ThemeToggle />

          {/* Background Effects */}
          <StarBackground />

          {/* Navbar */}
          <Navbar />

          {/* Main content */}
          <main>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
          </main>

          {/* footer */}
          <Footer />
      </div>
  )
}

