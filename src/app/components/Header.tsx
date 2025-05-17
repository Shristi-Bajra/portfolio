"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import NavLink from "./NavLink";
import MobileMenu from "./MobileLink";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#">
            <div className="text-xl font-bold tracking-tight transition-colors duration-300 hover:text-teal-500 hover:cursor-pointer">
              Shristi Bajracharya
            </div>
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              {["about", "skills", "projects", "contact"].map((section) => (
                <NavigationMenuItem key={section}>
                  <NavLink
                    href={`#${section}`}
                    active={activeSection === section}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </NavLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
