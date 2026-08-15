import { Code, Github, Palette, PenTool, Wind } from "lucide-react";
import { Section } from "./Section";

const skills = [
  { icon: Code, name: "HTML", desc: "Building structured and semantic web pages." },
  { icon: Palette, name: "CSS", desc: "Creating responsive layouts and polished visual styles." },
  { icon: Wind, name: "Tailwind CSS", desc: "Building modern responsive interfaces efficiently." },
  { icon: PenTool, name: "Figma", desc: "Designing clean and user-focused UI concepts." },
  { icon: Github, name: "GitHub", desc: "Managing and sharing projects using Git and GitHub." },
];

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Tools"
      subtitle="Technologies and tools I'm currently working with."
      className="bg-card"
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ icon: Icon, name, desc }) => (
          <li
            key={name}
            className="rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-navy">{name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
