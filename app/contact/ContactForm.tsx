"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.string().email("Please enter a valid email").max(200),
  message: z.string()
    .superRefine((val, ctx) => {
      if (val.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please add a message",
        });
      } else if (val.length > 0 && val.length < 10) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Please enter a valid message of at least 10 characters (${val.length}/10)`,
        });
      } else if (val.length > 4000) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Message must be less than 4000 characters",
        });
      }
    }),
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
  const [showSuccessDialog, setShowSuccessDialog] = React.useState(false);

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
    setShowSuccessDialog(true);
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

        {status.state === "error" ? (
          <p className="text-sm text-rose-700 dark:text-rose-300">{status.message}</p>
        ) : null}
      </div>

      {status.state === "sent" && status.mode === "console" ? (
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Note: email is currently in console mode. Configure SMTP env vars to actually send mail.
        </p>
      ) : null}

      {showSuccessDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="glass relative w-full max-w-sm rounded-2xl p-6 shadow-lg">
            <button
              onClick={() => setShowSuccessDialog(false)}
              className="absolute right-4 top-4 text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg className="h-12 w-12 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[color:var(--foreground)]">Message Sent!</h3>
              <p className="mb-6 text-sm text-[color:var(--muted)]">Thanks for reaching out. I'll get back to you soon.</p>
              <button
                onClick={() => setShowSuccessDialog(false)}
                className="inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-semibold shadow-sm transition hover:opacity-95 bg-[color:var(--accent)] text-[#0F1219]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
