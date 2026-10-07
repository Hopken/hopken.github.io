"use client";

import { useEffect, useState } from "react";
import { Menu, MoonStar, SunMedium } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    for (const link of navLinks) {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <header className="sticky top-0 z-50 pt-4 sm:pt-6">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-card px-5 py-4 sm:px-8">
          <a href="#home" className="text-sm font-bold tracking-wide sm:text-base">
            <span className="ml-1">{profile.name.toUpperCase()}</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-sm transition-colors hover:text-accent ${
                    active === link.id ? "text-accent" : "text-fg/80"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="rounded-full border-accent text-accent hover:bg-accent hover:text-white"
            >
              {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Toggle menu"
                    className="rounded-full border-line text-fg lg:hidden"
                  />
                }
              >
                <Menu className="h-4 w-4" />
              </SheetTrigger>

              <SheetContent side="right" className="border-line bg-card p-0 sm:max-w-sm">
                <SheetHeader className="border-b border-line px-5 py-4 text-left">
                  <SheetTitle className="text-left text-base font-semibold text-fg">Menu</SheetTitle>
                </SheetHeader>

                <div className="p-5">
                  <ul className="space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <a
                          href={`#${link.id}`}
                          onClick={() => setOpen(false)}
                          className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                            active === link.id ? "bg-accent/10 text-accent" : "text-fg/80 hover:text-accent"
                          }`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
