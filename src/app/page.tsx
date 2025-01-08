import { Header } from "@/sections/Header";
import { HeroSection  } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <TapeSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
