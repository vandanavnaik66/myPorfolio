"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer({ year }: { year: number }) {
  const [taps, setTaps] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (taps >= 7) {
      setOpen(true);
      const t = setTimeout(() => {
        setOpen(false);
        setTaps(0);
      }, 5500);
      return () => clearTimeout(t);
    }
  }, [taps]);

  return (
    <footer className="border-t py-10 text-sm border-[color:var(--glass-border)] text-[color:var(--muted)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p>
            © {year} · Built with Next.js, Tailwind, and Framer Motion.
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Hidden detail"
              onClick={() => setTaps((v) => v + 1)}
              className="h-6 w-6 rounded-full ring-1 ring-black/5 transition hover:scale-[1.03] dark:ring-white/10 bg-[radial-gradient(120%_120%_at_30%_20%,rgba(163,177,255,0.65),transparent_60%),radial-gradient(120%_120%_at_70%_70%,rgba(251,207,232,0.65),transparent_60%)]"
            />
            <span className="text-xs text-[color:var(--muted)]">Privacy-first. No trackers.</span>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="glass rounded-2xl p-4 shadow-sm text-[color:var(--muted)]"
            >
              <p className="font-medium">Easter egg unlocked.</p>
              <p className="mt-1 text-sm">
                You found the calm layer. Hint: the best UI is the one that feels obvious.
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </footer>
  );
}
