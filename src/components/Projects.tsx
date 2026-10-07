import { ArrowUpRight, FolderKanban } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui";

export default function Projects() {
  return (
    <section id="projects" className="mt-6">
      <Card className="border border-line bg-card px-6 py-8 sm:px-8">
        <SectionHeading
          icon={<FolderKanban className="h-6 w-6" />}
          title="PROJECTS"
          action={
            <a
              href="#projects"
              className="hidden items-center gap-2 text-sm font-semibold text-accent hover:underline sm:inline-flex"
            >
              View All Projects <ArrowUpRight className="h-4 w-4" />
            </a>
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="group h-full border border-line bg-card-2 p-0 transition-colors hover:border-accent">
              <a href={project.href} target="_blank" rel="noreferrer" className="flex h-full flex-col p-6">
                <span className="text-xl" aria-hidden>
                  {project.icon}
                </span>
                <h3 className="mt-4 text-base font-bold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-accent/40 bg-accent/5 text-accent">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <span className="mt-5 flex justify-end text-fg transition-colors group-hover:text-accent">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </Card>
          ))}
        </div>
      </Card>
    </section>
  );
}
