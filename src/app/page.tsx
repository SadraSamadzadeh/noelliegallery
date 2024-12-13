
import Hero from "~/components/hero";
import AboutSection from "./_components/about-section";
import IntroSection from "./_components/intro-section";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  
  
 
  return (
    <main className="flex flex-col">
      <Hero/>
      <IntroSection />
      <AboutSection />
    </main>
  );
}
