import { AboutMe, HeroSection, NavBar, StarBackground, ThemeToggle } from "../Components"
import ContactSection from "../Components/ContactSection"
import ProjectsSection from "../Components/ProjectsSection"
import SkillsSection from "../Components/SkillsSection"
import Footer from "./Footer"


function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">


        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}

        <StarBackground />

        {/* Navbar */}

        <NavBar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutMe />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}

        <Footer />
      
    </div>
  )
}

export default Home
