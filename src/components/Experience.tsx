import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui";

export default function Experience() {
  return (
    <section id="experience" className="mt-6">
      <Card className="border border-line bg-card px-6 py-8 sm:px-8">
        <SectionHeading icon={<BriefcaseBusiness className="h-6 w-6" />} title="EXPERIENCE" />

        <ol className="space-y-4">
          {experience.map((item) => (
            <li key={item.period} className="rounded-2xl border border-line bg-card-2 p-4 md:p-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="text-sm font-semibold text-accent">{item.period}</p>
                    <h3 className="mt-2 text-base font-bold">{item.role}</h3>
                  </div>
                </div>

                <Badge variant="outline" className="border-accent/40 bg-accent/5 text-accent">
                  {item.type}
                </Badge>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </Card>
    </section>
  );
}
