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
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
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

        <ProfilePhoto />
      </div>
    </section>
  );
}

function ProfilePhoto() {
  return (
    <div className="order-1 flex animate-fade-up justify-center lg:order-2 lg:justify-end">
      <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]">
        <div
          aria-hidden="true"
          className="absolute -right-4 -top-4 size-24 rounded-3xl bg-primary/10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-5 -left-5 size-20 rounded-full border-2 border-primary/20"
        />
        <div className="relative overflow-hidden rounded-3xl border-2 border-primary/60 bg-card p-2 shadow-card">
          <img
            src={profilePhoto.url}
            alt="Aung Zaw Myo - Web Designer, UI/UX Designer and Frontend Developer"
            width={720}
            height={900}
            loading="eager"
            decoding="async"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
            className="aspect-4/5 w-full rounded-2xl object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
