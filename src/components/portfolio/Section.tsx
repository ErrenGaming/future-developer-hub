import type { ReactNode } from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {title && (
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}
        <div className={title ? "mt-12" : ""}>{children}</div>
      </div>
    </section>
  );
}
