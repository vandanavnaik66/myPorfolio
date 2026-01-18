"use client";

import * as React from "react";
import Image from "next/image";

type ProjectImage = {
  src: string;
  alt: string;
};

export function ProjectImageGallery({ images }: { images: ProjectImage[] }) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);

  const isOpen = activeIndex !== null;
  const active = activeIndex !== null ? images[activeIndex] : null;

  React.useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => {
          if (i === null) return i;
          return (i + 1) % images.length;
        });
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) => {
          if (i === null) return i;
          return (i - 1 + images.length) % images.length;
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the close button for basic accessibility.
    queueMicrotask(() => closeButtonRef.current?.focus());

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [images.length, isOpen]);

  return (
    <>
      <section className="grid gap-5 md:grid-cols-2">
        {images.map((img, index) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open image: ${img.alt}`}
            aria-haspopup="dialog"
            className="glass group relative aspect-16/10 overflow-hidden rounded-3xl shadow-sm transition hover:opacity-95"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/35 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
              Click to enlarge
            </span>
          </button>
        ))}
      </section>

      {isOpen && active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50"
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setActiveIndex(null)}
            className="absolute inset-0 bg-black/70"
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
            <div className="pointer-events-auto relative w-full max-w-5xl">
              <div className="glass relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-2xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>

                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <p className="truncate text-sm text-white/80">{active.alt}</p>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex((i) => {
                          if (i === null) return i;
                          return (i - 1 + images.length) % images.length;
                        })
                      }
                      className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 transition hover:bg-white/15"
                      aria-label="Previous image"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex((i) => {
                          if (i === null) return i;
                          return (i + 1) % images.length;
                        })
                      }
                      className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 transition hover:bg-white/15"
                      aria-label="Next image"
                    >
                      →
                    </button>
                    <button
                      ref={closeButtonRef}
                      type="button"
                      onClick={() => setActiveIndex(null)}
                      className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 transition hover:bg-white/15"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
