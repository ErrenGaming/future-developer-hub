import { ArrowRight } from "lucide-react";

export function CareerStatus() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="grid-backdrop pointer-events-none absolute inset-0 opacity-10"
          />
          <div className="relative max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] text-primary-foreground">
              <span className="size-2 rounded-full bg-primary-foreground" />
              AVAILABLE FOR INTERNSHIP &amp; JUNIOR OPPORTUNITIES
            </p>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
              Looking for My First Professional Opportunity
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/75">
              I'm currently looking for an internship or junior-level opportunity where I can apply
              my skills, learn from experienced professionals, contribute to real-world projects,
              and grow as a Web Designer, UI/UX Designer, and Frontend Developer.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Get In Touch <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
