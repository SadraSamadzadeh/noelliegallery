import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import {getMyImages } from "~/server/queries";
import Image from "next/image";
import Hero from "~/components/hero";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  
  
 
  return (
    <main className="">
      <SignedOut>
      <Hero/>
      </SignedOut>
    </main>
  );
}
