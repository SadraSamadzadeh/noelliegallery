"use client"

import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
export function ButtonDemo() {
  return <Button>Button</Button>
}
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "~/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "../../components/ui/navigation-menu"
import Link from "next/link";
import NavbarLayout from "./navbar-layout";
import React from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Noëlle Portfolio (Coming Soon)",
    href: "/docs/primitives/alert-dialog",
    description:
      "Beautifully designed portfolio for Noëlle and her artwork",
  },
  {
    title: "Sadra Portfolio (Coming Soon)",
    href: "/docs/primitives/hover-card",
    description:
      "Software Engineering portfolio for Sadra and his work",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
export default function TopNav({children}) {

  return (
    <NavbarLayout>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Noellie Gallery
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed gallery for uploading your photos
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                How the website works and stuff you know!
              </ListItem>
              <ListItem href="/docs/installation" title="About">
                About the project and Sadra (me :D)
              </ListItem>
              <ListItem href="/random-not-found" title="Not Found">
                Go to 404 page for a cute surprise
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://github.com/SadraSamadzadeh" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Github
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> 
            <SignedIn>
              <NavigationMenuLink>
               {children}
              </NavigationMenuLink>
            </SignedIn>
      </NavigationMenuList>
    </NavigationMenu>
    <div className="flex gap-10">
      <SignedIn>
        <UserButton />          
    </SignedIn>
      <SignedOut>
          <SignInButton>
            <Button variant={"outline"}>Sign In</Button>
          </SignInButton>
      </SignedOut>
    </div>
      

      
    </NavbarLayout>
  )
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"







// export default function TopNav() {
//     return (
//       <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b ">
//         <div>
//             Gallery
//         </div>
//         <div className="flex flex-row">

//             <SignedOut>
//                 <SignInButton />
//             </SignedOut>
//             <SignedIn>
//               <SimpleUploadButton 
//               />
//                 <UserButton />
//             </SignedIn>
//         </div>
//       </nav>
//     )
//   }
  