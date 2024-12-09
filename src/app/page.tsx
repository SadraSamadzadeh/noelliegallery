import { SignedIn, SignedOut } from "@clerk/nextjs";
import Hero from "~/components/hero";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
      <Hero/>
      </SignedOut>
      <SignedIn>
        <Hero/>
      </SignedIn>
    </main>
  );
}
