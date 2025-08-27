import { AboutMe, HeroSection, NavBar, StarBackground, ThemeToggle } from "../Components"
import SkillsSection from "../Components/SkillsSection"


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
        </main>

        {/* Footer */}
      
    </div>
  )
}

export default Home
