"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.string().email("Please enter a valid email").max(200),
  message: z.string().min(10, "Please add a message").max(4000),
});

type FormValues = z.infer<typeof Schema>;

type ContactResponse =
  | { ok: true; mode?: string }
  | { ok?: false; error?: string; details?: unknown };

export function ContactForm() {
  const [status, setStatus] = React.useState<
    | { state: "idle" }
    | { state: "sending" }
    | { state: "sent"; mode: string }
    | { state: "error"; message: string }
  >({ state: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(Schema) });

  const onSubmit = handleSubmit(async (values) => {
    setStatus({ state: "sending" });

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).catch(() => null);

    if (!res) {
      setStatus({ state: "error", message: "Network error. Please try again." });
      return;
    }

    const data = (await res.json().catch(() => null)) as ContactResponse | null;

    if (!res.ok) {
      setStatus({ state: "error", message: (data && "error" in data && data.error) ? data.error : "Something went wrong." });
      return;
    }

    reset();
    setStatus({ state: "sent", mode: data && "mode" in data ? data.mode ?? "unknown" : "unknown" });
  });

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Name</label>
          <input
            {...register("name")}
            className="glass mt-2 w-full rounded-2xl px-4 py-3 text-sm shadow-sm outline-none ring-0 transition focus:opacity-95"
            placeholder="Your name"
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-rose-600 dark:text-rose-300">{errors.name.message}</p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Email</label>
          <input
            {...register("email")}
            className="glass mt-2 w-full rounded-2xl px-4 py-3 text-sm shadow-sm outline-none ring-0 transition focus:opacity-95"
            placeholder="you@example.com"
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-rose-600 dark:text-rose-300">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Message</label>
        <textarea
          {...register("message")}
          rows={6}
          className="glass mt-2 w-full resize-none rounded-2xl px-4 py-3 text-sm shadow-sm outline-none ring-0 transition focus:opacity-95"
          placeholder="Tell me what you’re building — or how I can help."
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-rose-600 dark:text-rose-300">{errors.message.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold shadow-sm transition hover:opacity-95 disabled:opacity-60 bg-[color:var(--accent)] text-[#0F1219]"
        >
          {status.state === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status.state === "sent" ? (
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            Message sent. Thanks for reaching out.
          </p>
        ) : null}
        {status.state === "error" ? (
          <p className="text-sm text-rose-700 dark:text-rose-300">{status.message}</p>
        ) : null}
      </div>

      {status.state === "sent" && status.mode === "console" ? (
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Note: email is currently in console mode. Configure SMTP env vars to actually send mail.
        </p>
      ) : null}
    </form>
  );
}
