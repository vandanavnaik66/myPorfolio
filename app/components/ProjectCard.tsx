"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

function pickAspectClass(slug: string) {
  // Deterministic variety without adding new content fields.
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash + slug.charCodeAt(i)) % 997;
  const options = ["aspect-[16/10]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]"] as const;
  return options[hash % options.length];
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const img = project.cardImage ?? project.images[0];
  const aspectClass = pickAspectClass(project.slug);

  return (
    <motion.div
      className="mb-5 break-inside-avoid"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "group block overflow-hidden rounded-3xl",
          "glass shadow-sm",
          "transition hover:-translate-y-0.5 hover:shadow-md",
          ""
        )}
      >
        <div className={cn("relative overflow-hidden", aspectClass)}>
          <Image
            src={img?.src ?? "/images/projects/placeholder.svg"}
            alt={img?.alt ?? project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{project.summary}</p>
            </div>
            {project.year ? (
              <span className="rounded-full bg-black/4 px-2.5 py-1 text-xs font-medium text-[color:var(--muted)] dark:bg-white/6">
                {project.year}
              </span>
            ) : null}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((s) => (
              <span
                key={s}
                className="glass rounded-full px-2.5 py-1 text-xs text-[color:var(--muted)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
