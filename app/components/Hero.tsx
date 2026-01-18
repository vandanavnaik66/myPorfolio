"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero({
  name,
  title,
  summary,
  photoSrc,
  resumeUrl,
}: {
  name: string;
  title: string;
  summary: string[];
  photoSrc: string;
  resumeUrl?: string;
}) {
  const onViewWork = React.useCallback(() => {
    const el = document.getElementById("work");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-[color:var(--muted)] shadow-sm"
        >
          <span aria-hidden className="relative mr-2 inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          Available for opportunities
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
        >
          {name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 text-lg text-zinc-600 dark:text-zinc-300"
        >
          {title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 space-y-2 text-zinc-600 dark:text-zinc-300"
        >
          {summary.slice(0, 3).map((line) => (
            <p key={line} className="leading-7">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <button
            type="button"
            onClick={onViewWork}
            className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold shadow-sm transition hover:opacity-95 bg-[color:var(--accent)] text-[#0F1219]"
          >
            View My Work
          </button>
          <Link
            href="/contact"
            className="glass inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold shadow-sm transition hover:opacity-95"
          >
            Contact Me
          </Link>

          {resumeUrl ? (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold shadow-sm transition hover:opacity-95"
            >
              View my resume
            </a>
          ) : null}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mx-auto w-full max-w-sm"
      >
        <div className="absolute -inset-6 rounded-[2.5rem] blur-2xl bg-[radial-gradient(120%_120%_at_30%_20%,rgba(163,177,255,0.55),transparent_60%),radial-gradient(120%_120%_at_70%_70%,rgba(251,207,232,0.50),transparent_60%)] dark:bg-[radial-gradient(120%_120%_at_30%_20%,rgba(199,210,254,0.18),transparent_60%),radial-gradient(120%_120%_at_70%_70%,rgba(253,164,175,0.14),transparent_60%)]" />
        <div className="glass relative overflow-hidden rounded-[2.25rem] p-3 shadow-sm">
          <div className="relative aspect-square overflow-hidden rounded-[1.85rem]">
            <Image
              src={photoSrc}
              alt="Portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 360px"
              priority
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_85%,rgba(10,10,10,0.064),transparent_55%),radial-gradient(120%_120%_at_80%_20%,rgba(255,255,255,0.176),transparent_60%),linear-gradient(135deg,rgba(255,214,231,0.224)_0%,rgba(200,230,255,0.176)_50%,rgba(215,255,230,0.144)_100%)] dark:bg-[radial-gradient(120%_120%_at_20%_85%,rgba(0,0,0,0.176),transparent_55%),radial-gradient(120%_120%_at_80%_20%,rgba(255,255,255,0.08),transparent_60%),linear-gradient(135deg,rgba(255,214,231,0.096)_0%,rgba(200,230,255,0.08)_50%,rgba(215,255,230,0.08)_100%)]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
