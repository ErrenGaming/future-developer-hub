import { Mail, Phone, Send } from "lucide-react";
import { contact } from "./contact-info";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-lg font-extrabold tracking-tight text-navy">Aung Zaw Myo</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Web Designer · UI/UX Designer · Frontend Developer
          </p>
        </div>

        <nav aria-label="Contact" className="flex flex-wrap gap-5">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-primary"
          >
            <Mail className="size-4 text-primary" aria-hidden="true" /> Email
          </a>
          <a
            href={contact.telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-primary"
          >
            <Send className="size-4 text-primary" aria-hidden="true" /> Telegram
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-primary"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" /> Phone
          </a>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-5 text-xs text-muted-foreground sm:px-8">
        © 2026 Aung Zaw Myo. All rights reserved.
      </p>
    </footer>
  );
}
