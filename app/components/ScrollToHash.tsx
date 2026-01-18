"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export function ScrollToHash() {
  const pathname = usePathname();

  const scroll = React.useCallback(() => {
    const hash = window.location.hash;
    if (!hash) return;

    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  React.useEffect(() => {
    scroll();
    window.addEventListener("hashchange", scroll);
    return () => window.removeEventListener("hashchange", scroll);
  }, [scroll]);

  React.useEffect(() => {
    // Always start new pages at the top.
    // Exception: allow navigating to the Work section via /#work.
    if (typeof window === "undefined") return;
    if (window.location.hash === "#work") return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
