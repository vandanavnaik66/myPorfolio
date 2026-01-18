import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectApi } from "@/lib/api";
import { ProjectImageGallery } from "./ProjectImageGallery";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectApi(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectApi(slug);

  if (!project) notFound();

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
          >
            ← Back
          </Link>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="glass rounded-full px-2.5 py-1 text-xs text-(--muted)"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold shadow-sm transition hover:opacity-95 bg-(--accent) text-[#0F1219]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {project.role || project.year ? (
          <div className="glass rounded-3xl p-5 text-sm shadow-sm text-(--muted)">
            {project.role ? (
              <p>
                <span className="font-semibold">Role:</span> {project.role}
              </p>
            ) : null}
            {project.year ? (
              <p className="mt-2">
                <span className="font-semibold">Year:</span> {project.year}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      <section className="glass rounded-3xl p-6 shadow-sm">
        <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Highlights
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent-2)" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </section>
      
      <ProjectImageGallery images={project.images} />

    </div>
  );
}
