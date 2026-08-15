import { FileCode2, LayoutTemplate, MousePointerClick, Repeat } from "lucide-react";
import { Section } from "./Section";

const services = [
  {
    icon: LayoutTemplate,
    title: "Web Design",
    desc: "Creating clean, modern, and responsive website layouts that communicate clearly and work across different screen sizes.",
  },
  {
    icon: MousePointerClick,
    title: "UI/UX Design",
    desc: "Designing simple, intuitive, and user-friendly interfaces with a focus on usability and visual consistency.",
  },
  {
    icon: FileCode2,
    title: "Frontend Development",
    desc: "Turning designs into responsive web interfaces using HTML, CSS, and Tailwind CSS.",
  },
  {
    icon: Repeat,
    title: "Design to Code",
    desc: "Transforming UI concepts and Figma designs into clean and responsive frontend interfaces.",
  },
];

export function Services() {
  return (
    <Section id="services" title="What I Can Do">
      <ul className="grid gap-5 sm:grid-cols-2">
        {services.map(({ icon: Icon, title, desc }) => (
          <li
            key={title}
            className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
