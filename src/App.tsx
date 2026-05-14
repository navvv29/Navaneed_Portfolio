import { useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { HeroSection } from './sections/HeroSection';
import { TechStackMarquee } from './sections/TechStackMarquee';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  useEffect(() => {
    // Hide default cursor
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    return () => {
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <main className="bg-[var(--bg)] text-[var(--text-primary)] overflow-x-clip">
      <CustomCursor />
      <HeroSection />
      <TechStackMarquee />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}

export default App;
