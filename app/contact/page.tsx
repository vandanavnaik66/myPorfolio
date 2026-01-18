import type { Metadata } from "next";
import { ContactForm } from "@/app/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Contact Me
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300">
        Send me a message and I’ll get back to you.
      </p>

      <div className="glass mt-8 rounded-3xl p-6 shadow-sm">
        <ContactForm />
      </div>
    </div>
  );
}
