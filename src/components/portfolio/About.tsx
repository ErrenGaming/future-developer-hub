import { BriefcaseBusiness, GraduationCap, Compass, BadgeCheck } from "lucide-react";
import { Section } from "./Section";

const profile = [
  { icon: GraduationCap, label: "Education", value: "Computer University, Mandalay" },
  { icon: BadgeCheck, label: "Academic Level", value: "Fourth Year" },
  { icon: Compass, label: "Career Focus", value: "Web Design · UI/UX · Frontend" },
  { icon: BriefcaseBusiness, label: "Availability", value: "Internship · Junior Opportunities" },
];

export function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Student today. Building toward a professional career in design and development."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm currently a fourth-year student at Computer University, Mandalay, with a strong
            interest in Web Design, UI/UX Design, and Frontend Development.
          </p>
          <p>
            I enjoy creating interfaces that are visually clean, easy to understand, and comfortable
            to use. I'm also interested in turning designs into responsive websites using modern
            frontend techniques.
          </p>
          <p>
            While I'm still at the beginning of my professional journey and don't have formal
            industry experience yet, I'm actively improving my skills through learning and personal
            projects.
          </p>
          <p>
            I'm looking for an internship or junior-level opportunity where I can learn from
            experienced professionals, contribute to real-world projects, and continue growing as a
            designer and frontend developer.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <h3 className="text-sm font-bold tracking-[0.12em] text-muted-foreground">PROFILE</h3>
          <ul className="mt-5 space-y-5">
            {profile.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex gap-3.5">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-4.5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {label}
                  </span>
                  <span className="block text-sm font-semibold text-navy">{value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
