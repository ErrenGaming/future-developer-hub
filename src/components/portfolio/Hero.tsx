import { ArrowRight, Code2, Layers, MonitorSmartphone, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/aung-zaw-myo.jpg.asset.json";


const valuePoints = [
  { icon: MonitorSmartphone, label: "Clean & Responsive Design" },
  { icon: Layers, label: "User-Focused Interfaces" },
  { icon: Code2, label: "Frontend Development" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        aria-hidden="true"
        className="grid-backdrop pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_60%_0%,black,transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="order-2 animate-fade-up lg:order-1">

            AVAILABLE FOR INTERNSHIP &amp; JUNIOR OPPORTUNITIES
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Hi, I'm Aung Zaw Myo.
          </h1>
          <p className="mt-4 text-lg font-semibold text-primary sm:text-xl">
            Web Designer · UI/UX Designer · Frontend Developer
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            I'm a fourth-year Computer University student passionate about designing and building
            clean, user-friendly digital experiences. I'm currently looking for an internship or
            junior-level opportunity where I can learn, contribute, and grow through real-world
            projects.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              View My Work <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
            >
              Let's Talk
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
            </span>
            Open to Internship &amp; Junior Opportunities
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {valuePoints.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-3 text-sm font-medium text-navy"
              >
                <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="min-w-0">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative animate-fade-up" aria-hidden="true">
      <div className="animate-float rounded-2xl border border-border bg-card shadow-card">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-muted-foreground/40" />
          <span className="size-2.5 rounded-full bg-primary/60" />
          <span className="ml-3 truncate rounded-md bg-muted px-2.5 py-1 text-[11px] text-muted-foreground">
            aungzawmyo.dev
          </span>
        </div>
        <div className="space-y-4 p-5">
          <div className="rounded-xl bg-navy p-4">
            <p className="font-mono text-[11px] leading-relaxed text-primary-foreground/70">
              <span className="text-primary-foreground/40">1</span>{" "}
              <span className="text-primary-foreground/90">&lt;section</span> className=
              <span className="text-primary-foreground/60">"hero"</span>
              <span className="text-primary-foreground/90">&gt;</span>
              <br />
              <span className="text-primary-foreground/40">2</span>{" "}
              &nbsp;&nbsp;clean · responsive · accessible
              <br />
              <span className="text-primary-foreground/40">3</span>{" "}
              <span className="text-primary-foreground/90">&lt;/section&gt;</span>
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-border p-3">
                <div className="h-1.5 w-8 rounded-full bg-primary" />
                <div className="mt-2 h-1.5 w-full rounded-full bg-muted" />
                <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-muted" />
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-2 w-2/3 rounded-full bg-muted" />
            <div className="h-2 w-1/2 rounded-full bg-muted" />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 hidden w-44 rounded-xl border border-border bg-card p-4 shadow-card sm:block">
        <p className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground">UI COMPONENT</p>
        <div className="mt-3 rounded-lg bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground">
          Primary Button
        </div>
      </div>
      <div className="absolute -right-3 -top-5 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-card sm:block">
        <p className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground">GRID</p>
        <p className="mt-1 text-sm font-bold text-navy">12 · 8pt spacing</p>
      </div>
    </div>
  );
}
