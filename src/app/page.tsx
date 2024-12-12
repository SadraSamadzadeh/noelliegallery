import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import {getMyImages } from "~/server/queries";
import Image from "next/image";
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
