"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Profile } from "@/lib/types";

export function ProfileClient({ profile }: { profile: Profile }) {
  const skillGroups = profile.skillGroups?.filter((g) => g.items.length) ?? [];

  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] blur-2xl bg-[radial-gradient(120%_120%_at_30%_20%,rgba(163,177,255,0.55),transparent_60%),radial-gradient(120%_120%_at_70%_70%,rgba(251,207,232,0.50),transparent_60%)] dark:bg-[radial-gradient(120%_120%_at_30%_20%,rgba(199,210,254,0.18),transparent_60%),radial-gradient(120%_120%_at_70%_70%,rgba(253,164,175,0.14),transparent_60%)]" />
          <div className="glass relative overflow-hidden rounded-[2.25rem] p-3 shadow-sm">
            <div className="relative aspect-square overflow-hidden rounded-[1.85rem]">
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 420px"
                priority
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_85%,rgba(10,10,10,0.064),transparent_55%),radial-gradient(120%_120%_at_80%_20%,rgba(255,255,255,0.176),transparent_60%),linear-gradient(135deg,rgba(255,214,231,0.224)_0%,rgba(200,230,255,0.176)_50%,rgba(215,255,230,0.144)_100%)] dark:bg-[radial-gradient(120%_120%_at_20%_85%,rgba(0,0,0,0.176),transparent_55%),radial-gradient(120%_120%_at_80%_20%,rgba(255,255,255,0.08),transparent_60%),linear-gradient(135deg,rgba(255,214,231,0.096)_0%,rgba(200,230,255,0.08)_50%,rgba(215,255,230,0.08)_100%)]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {/* <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300"></p> */}
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {profile.greeting}
          </h1>
          {/* <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-300">{profile.title}</p> */}

          <div className="mt-5 space-y-2 text-zinc-600 dark:text-zinc-300">
            {profile.summary.map((line) => (
              <p key={line} className="leading-7">
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-6 shadow-sm"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Skills
              </h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                Core strengths, tooling, and ways of working.
              </p>
            </div>
          </div>

          {skillGroups.length ? (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title} className="glass rounded-2xl p-4">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {group.title}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={`${group.title}-${item}`}
                        className="rounded-full border border-black/5 bg-white/50 px-2.5 py-1 text-xs text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.skills.map((s) => (
                <span
                  key={s}
                  className="glass rounded-full px-2.5 py-1 text-xs text-[color:var(--muted)]"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="glass rounded-3xl p-6 shadow-sm"
        >
          <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Education
          </h2>
          <div className="mt-4 space-y-4">
            {profile.education.map((e) => (
              <div key={`${e.school}-${e.period}`}>
                <p className="font-medium text-zinc-900 dark:text-zinc-50">{e.school}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{e.degree}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{e.period}</p>
                {e.details ? (
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{e.details}</p>
                ) : null}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {profile.interests?.length ? (
        <section className="glass rounded-3xl p-6 shadow-sm">
          <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Interests
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            {profile.interests.join(" · ")}
          </p>
        </section>
      ) : null}
    </div>
  );
}
