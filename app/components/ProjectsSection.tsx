"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/types";
import { ProjectCard } from "@/app/components/ProjectCard";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [expanded, setExpanded] = React.useState(false);
  const visible = expanded ? projects : projects.slice(0, 2);

  return (
    <section id="work" className="scroll-mt-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            My Work
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            A curated selection — built with care, clarity, and performance in mind.
          </p>
        </div>

        {projects.length > 2 ? (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="glass rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition hover:opacity-95 cursor-pointer"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        ) : null}
      </div>

      <motion.div
        className="mt-6 columns-1 gap-x-5 md:columns-2"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.04 } },
        }}
      >
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
