"use client";

import { ArrowRight } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { Glow } from "@/components/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <section id="home" className="relative pt-6 sm:pt-8">
      <Glow className="-top-20 left-1/4 opacity-[var(--glow-1)]" />
      <Card className="relative overflow-hidden border border-line bg-card shadow-[0_1px_0_rgba(255,255,255,0.02)_inset]">
        <CardContent className="grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.2fr_1fr] lg:px-14">
          <div>
            <p className="mb-4 text-lg font-semibold text-accent sm:text-xl">{profile.greeting}</p>
            <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              {profile.firstName}
              <br />
              {profile.lastName}
            </h1>
            <p className="mt-4 max-w-md text-base font-bold uppercase leading-snug text-accent sm:text-lg">
              {profile.headline[0]}
              <br />
              {profile.headline[1]}
            </p>
            <div className="my-6 h-1 w-24 rounded bg-accent" />
            <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">{profile.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full bg-accent text-white hover:bg-accent/90"
                onClick={() => window.location.assign("#projects")}
              >
                <span className="inline-flex items-center gap-2">
                  View My Work <ArrowRight className="h-4 w-4" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-accent text-fg hover:bg-accent hover:text-white"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = profile.cvHref;
                  link.download = "hope_soko_cv.pdf";
                  link.click();
                }}
              >
                Download CV
              </Button>
            </div>

            <ul className="mt-6 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-xs font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
                  >
                    {social.glyph}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Avatar
              size="lg"
              className="!size-auto h-[350px] w-[280px] overflow-hidden rounded-[1.5rem] border-2 border-accent shadow-lg"
              style={{ width: 280, height: 350 }}
            >
              <AvatarImage
                src="/profile.webp"
                alt={`${profile.name} profile photo`}
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
              <AvatarFallback className="text-2xl font-semibold text-fg">{profile.initials}</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
