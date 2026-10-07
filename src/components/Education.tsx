import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui";

export default function Education() {
  return (
    <section id="education">
      <Card className="h-full border border-line bg-card px-6 py-8 sm:px-8">
        <SectionHeading icon={<GraduationCap className="h-6 w-6" />} title="EDUCATION" />

        <ol className="space-y-4">
          {education.map((item) => (
            <li key={item.title} className="rounded-2xl border border-line bg-card-2 p-4">
              <p className="text-xs font-semibold tracking-[0.12em] text-accent">{item.period}</p>
              <h3 className="mt-2 text-base font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.school}</p>
            </li>
          ))}
        </ol>
      </Card>
    </section>
  );
}
