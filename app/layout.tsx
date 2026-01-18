import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ScrollToHash } from "@/app/components/ScrollToHash";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vandana Naik · Portfolio",
    template: "%s · Vandana Naik",
  },
  description: "A calm, Apple-inspired portfolio built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <ScrollToHash />
          <div className="min-h-dvh bg-[radial-gradient(85%_60%_at_50%_0%,rgba(163,177,255,0.30),transparent_60%),radial-gradient(60%_60%_at_0%_10%,rgba(251,207,232,0.28),transparent_60%),radial-gradient(60%_60%_at_100%_20%,rgba(163,177,255,0.18),transparent_60%)] dark:bg-[radial-gradient(85%_60%_at_50%_0%,rgba(199,210,254,0.14),transparent_60%),radial-gradient(60%_60%_at_0%_10%,rgba(253,164,175,0.12),transparent_60%),radial-gradient(60%_60%_at_100%_20%,rgba(199,210,254,0.08),transparent_60%)]">
            <Header />
            <main className="mx-auto w-full max-w-5xl px-4 py-12">
              {children}
            </main>
            <Footer year={currentYear} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
