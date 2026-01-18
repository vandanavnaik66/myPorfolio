import "server-only";

import { headers } from "next/headers";
import type { Profile, Project } from "@/lib/types";

async function getBaseUrl() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";

  if (!host) {
    // Fallback for unusual runtimes; should not happen in Next.
    return "http://localhost:3000";
  }

  return `${proto}://${host}`;
}

async function fetchJson<T>(path: string, init?: RequestInit) {
  const url = `${await getBaseUrl()}${path}`;
  const res = await fetch(url, {
    ...init,
    headers: {
      ...(init?.headers ?? {}),
      accept: "application/json",
    },
    // Keep content fresh-ish while still cache-friendly.
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText} (${path})`);
  }

  return (await res.json()) as T;
}

export async function getProfileApi() {
  return fetchJson<Profile>("/api/profile");
}

export async function getProjectsApi() {
  return fetchJson<Project[]>("/api/projects");
}

export async function getProjectApi(slug: string) {
  const url = `${await getBaseUrl()}/api/projects/${encodeURIComponent(slug)}`;
  const res = await fetch(url, { next: { revalidate: 60 } });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText} (/api/projects/${slug})`);

  return (await res.json()) as Project;
}
