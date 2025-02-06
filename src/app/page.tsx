'use client'
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { ArticlesSection } from "@/components/sections/articles";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";
import { Navigation } from "@/components/sections/navigation";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Home() {
  useSmoothScroll();
  return (
    <main className="scroll-smooth">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ArticlesSection />
      <CertificationsSection />
      <ContactSection />
      
    </main>
  );
}
