"use client"

import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
    return (
      <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b ">
        <div>
            Gallery
        </div>
  
  
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
              <UploadButton endpoint={"imageUploader"} />
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }
  