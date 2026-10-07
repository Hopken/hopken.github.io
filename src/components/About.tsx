import { ArrowRight, Code2, User } from "lucide-react";
import { profile, skills } from "@/data/portfolio";
import { Card, SectionHeading } from "@/components/ui";

export default function About() {
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_2fr]">
      <section id="about">
        <Card className="flex h-full flex-col px-6 py-8 sm:px-8">
          <SectionHeading icon={<User className="h-6 w-6" />} title="ABOUT ME" />
          <p className="text-sm leading-relaxed text-muted">{profile.about}</p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent hover:text-white"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Card>
      </section>

      <section id="skills">
        <Card className="h-full px-6 py-8 sm:px-8">
          <SectionHeading icon={<Code2 className="h-6 w-6" />} title="SKILLS" />
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center justify-center gap-2 rounded-full border border-line bg-card-2 px-4 py-3 text-xs font-semibold sm:text-sm"
              >
                <span aria-hidden>{skill.icon}</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
