import { ArrowUpRight, Github, ImageIcon } from "lucide-react";
import { Section } from "./Section";

/**
 * Replace these placeholders with real projects.
 * `thumbnail` accepts an imported image (e.g. import shot from "@/assets/shot.png").
 */
export type Project = {
  index: string;
  title: string;
  description: string;
  technologies: string[];
  thumbnail?: string;
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    index: "Project 01",
    title: "Your Project Here",
    description: "Add a short description of the project, your role, and what problem it solves.",
    technologies: ["HTML", "CSS", "Tailwind CSS"],
  },
  {
    index: "Project 02",
    title: "Your Project Here",
    description: "Add a short description of the project, your role, and what problem it solves.",
    technologies: ["Figma", "UI Design"],
  },
  {
    index: "Project 03",
    title: "Your Project Here",
    description: "Add a short description of the project, your role, and what problem it solves.",
    technologies: ["HTML", "Tailwind CSS", "GitHub"],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      title="Selected Projects"
      subtitle="A selection of projects that showcase my design and frontend skills."
      className="bg-card"
    >
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.index}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
              <div className="relative aspect-16/10 overflow-hidden bg-muted">
                {p.thumbnail ? (
                  <img
                    src={p.thumbnail}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="grid-backdrop grid size-full place-items-center transition-transform duration-500 group-hover:scale-105">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <ImageIcon className="size-7" aria-hidden="true" />
                      <span className="text-xs font-semibold">Project screenshot</span>
                    </div>
                  </div>
                )}
                <span className="absolute left-3 top-3 rounded-md bg-card/90 px-2 py-1 text-[10px] font-bold tracking-[0.12em] text-primary backdrop-blur">
                  {p.index.toUpperCase()}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border bg-card px-2 py-1 text-[11px] font-semibold text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3 pt-2">
                  <a
                    href={p.demoUrl ?? "#projects"}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    View Project <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={p.githubUrl ?? "#projects"}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="size-3.5" aria-hidden="true" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
