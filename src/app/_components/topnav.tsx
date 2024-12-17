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
import React, { useRef, useState } from "react";

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
    title: "Albums",
    href: "/albums",
    description:
      "Take a look at all of your albums or add new ones",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    description:
      "Take a look at your dashboard to view your data and statistics",
  },
]
export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
export default function TopNav({children} : {children?: React.ReactNode}) {

  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();
  const MobileNav = () => {
    return (
      <>
      <div className="w-full flex justify-start p-10" onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M17.25 6.75L6.75 17.25" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.75 6.75L17.25 17.25" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className=" w-full h-full flex flex-col justify-start pl-10 gap-10">
        <div className="w-full font-bold flex justify-start items-center">
                <a href="/">Home</a>
          </div >
          <div className=" w-full font-bold flex justify-start items-center">
		  		<a href="/dashboard">Dashboard</a>
        </div> 
        <div className="w-full font-bold flex justify-start items-center">
				<a href="/albums">Albums</a>
        </div>
          <div className= "w-full font-bold flex justify-start items-center">
		  		<a href="https://github.com/SadraSamadzadeh">Github</a>	
        </div>
      </div>
      
      </>
    )
  }
  return (
    <div className="">
      <NavbarLayout>
        <div className="flex justify-around items-center gap-5 w-full sm:hidden">
          <div className="hover:bg-slate-600 p-2 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4.74988 5.75012L4.74988 6.25013C4.74988 6.80241 5.19759 7.25013 5.74988 7.25013L18.2501 7.25013C18.8024 7.25013 19.2501 6.80241 19.2501 6.25013V5.75012C19.2501 5.19784 18.8024 4.75012 18.2501 4.75012L5.74988 4.75012C5.19759 4.75012 4.74988 5.19784 4.74988 5.75012Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.74988 11.7501L4.74988 12.2501C4.74988 12.8024 5.19759 13.2501 5.74988 13.2501L18.2501 13.2501C18.8024 13.2501 19.2501 12.8024 19.2501 12.2501V11.7501C19.2501 11.1978 18.8024 10.7501 18.2501 10.7501L5.74988 10.7501C5.19759 10.7501 4.74988 11.1978 4.74988 11.7501Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.74988 17.7501L4.74988 18.2501C4.74988 18.8024 5.19759 19.2501 5.74988 19.2501L18.2501 19.2501C18.8024 19.2501 19.2501 18.8024 19.2501 18.2501V17.7501C19.2501 17.1978 18.8024 16.7501 18.2501 16.7501L5.74988 16.7501C5.19759 16.7501 4.74988 17.1978 4.74988 17.7501Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </div>
          <div className="font-normal text-lg">
            Noellie Gallery
          </div>

          {/* upload icon */}
          <div className=" flex gap-4 items-center">
          {children}
          <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton >
              <Button variant={"outline"}>Sign In</Button>
            </SignInButton>
            </SignedOut>
          </div>
          {/* user button */}
        </div>
        
        {/* this is for desktop */}
    <NavigationMenu className="hidden sm:flex w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a href="/"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
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
              <ListItem onClick={() => scrollToElement("intro")} href="#intro" title="Introduction">
                How the website works and stuff you know!
              </ListItem>
              <ListItem onClick={() => scrollToElement("about")} title="About">
                About the project and Sadra (me :D)
              </ListItem>
              <ListItem  href="/random-not-found" title="Not Found">
                Go to 404 page for a cute surprise
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Browse</NavigationMenuTrigger>
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
              <NavigationMenuLink className="hidden sm:block">
               {children}
              </NavigationMenuLink>
            </SignedIn>
      </NavigationMenuList>
    </NavigationMenu>
    <div className="gap-10 ml-auto hidden sm:flex">
      <SignedIn>
        <UserButton />          
    </SignedIn>
      <SignedOut>
          <SignInButton >
            <Button variant={"outline"}>Sign In</Button>
          </SignInButton>
      </SignedOut>
    </div>
    </NavbarLayout>
    <div className={` ${isOpen ? "flex h-full w-3/4 z-10 fixed top-0 left-0 bg-card flex-col gap-5 items-center" : "hidden"} sm:hidden`}>
      <MobileNav />      
    </div>
</div>
    
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

