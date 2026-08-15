import { useState } from "react";
import { CheckCircle2, Mail, Phone, Send } from "lucide-react";
import { Section } from "./Section";
import { contact } from "./contact-info";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (v: typeof values): Errors => {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Please enter your name.";
    if (!v.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Please enter a valid email.";
    if (!v.message.trim()) e.message = "Please enter a message.";
    else if (v.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSent(true);
    setValues({ name: "", email: "", message: "" });
  };

  const field =
    "mt-1.5 w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-navy placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none";

  return (
    <Section
      id="contact"
      title="Let's Work Together"
      subtitle="Have an internship opportunity, junior position, or project in mind? I'd love to hear from you."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <div className="space-y-4">
          <ContactRow
            icon={Mail}
            label="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
            cta="Email Me"
          />
          <ContactRow
            icon={Phone}
            label="Phone"
            value={contact.phone}
            href={`tel:${contact.phone}`}
            cta="Call Me"
          />
          <ContactRow
            icon={Phone}
            label="Alternative Phone"
            value={contact.altPhone}
            href={`tel:${contact.altPhone}`}
            cta="Call"
          />
          <ContactRow
            icon={Send}
            label="Telegram"
            value={contact.telegram}
            href={contact.telegramUrl}
            cta="Telegram"
            external
          />
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
        >
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-navy">
              Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              required
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              placeholder="Your name"
              className={field}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs font-medium text-destructive">
                {errors.name}
              </p>
            )}
          </div>

          <div className="mt-5">
            <label htmlFor="email" className="text-sm font-semibold text-navy">
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="you@company.com"
              className={field}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs font-medium text-destructive">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-semibold text-navy">
              Message <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={values.message}
              onChange={(e) => setValues({ ...values, message: e.target.value })}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Tell me about the opportunity or project…"
              className={field}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs font-medium text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto"
          >
            Send Message
          </button>

          <p aria-live="polite" className="mt-4 min-h-5 text-sm">
            {sent && (
              <span className="inline-flex items-center gap-2 font-medium text-primary">
                <CheckCircle2 className="size-4" aria-hidden="true" />
                Thanks! Your message has been recorded — I'll get back to you soon.
              </span>
            )}
          </p>
        </form>
      </div>
    </Section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  cta,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  cta: string;
  external?: boolean;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card p-5">
      <div className="flex min-w-0 items-center gap-3.5">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-4.5" />
        </span>
        <span className="min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {label}
          </span>
          <span className="block truncate text-sm font-semibold text-navy">{value}</span>
        </span>
      </div>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        className="shrink-0 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        {cta}
      </a>
    </div>
  );
}
