"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { site } from "@/lib/site";

const nav = [
  { label: "My Work", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Contact Me", href: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="glass-bar sticky top-0 z-40" data-scrolled={scrolled ? "true" : "false"}>
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <a
            className="glass inline-flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition hover:opacity-95"
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            className="glass inline-flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition hover:opacity-95"
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>

          <ThemeToggle className="ml-1" />
        </div>

        <Link
          href="/"
          className="group relative rounded-full px-4 py-2 text-sm font-semibold tracking-tight"
          aria-label="Home"
        >
          <span className="absolute inset-0 -z-10 rounded-full opacity-0 blur-sm transition group-hover:opacity-100 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(163,177,255,0.35),transparent_60%),radial-gradient(120%_120%_at_50%_100%,rgba(251,207,232,0.35),transparent_60%)]" />
          {site.shortName}
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-[color:var(--muted)] transition hover:bg-black/4 hover:text-[color:var(--foreground)] dark:hover:bg-white/6"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="flex items-center gap-1 sm:hidden">
          <Link
            href="/"
            className="rounded-full px-3 py-2 text-sm font-medium text-[color:var(--muted)] transition hover:bg-black/4 hover:text-[color:var(--foreground)] dark:hover:bg-white/6"
          >
            Work
          </Link>
          <Link
            href="/profile"
            className="rounded-full px-3 py-2 text-sm font-medium text-[color:var(--muted)] transition hover:bg-black/4 hover:text-[color:var(--foreground)] dark:hover:bg-white/6"
          >
            Profile
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-3 py-2 text-sm font-medium text-[color:var(--muted)] transition hover:bg-black/4 hover:text-[color:var(--foreground)] dark:hover:bg-white/6"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
