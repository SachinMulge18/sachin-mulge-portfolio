"use client";
import { useState } from "react";
import { Download, Mail, Phone, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

const field = "w-full rounded-lg border border-line bg-raised px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";
const link = "inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 transition hover:border-accent hover:text-accent";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend needed: opens the visitor's mail app with the message pre-filled.
  // Swap for a Server Action + Resend/Formspree if you want in-page delivery.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <footer id="contact" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">Let's connect</h2>
          <p className="mt-3 max-w-md text-muted">Hiring, or have a project in mind? Send a note and I'll reply within a day or two.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a href={profile.github} target="_blank" rel="noreferrer" className={link}><SiGithub className="size-4" aria-hidden />GitHub</a>
            <a href={`tel:${profile.phone}`} className={link}><Phone className="size-4" aria-hidden />{profile.phone}</a>
            <a href={`mailto:${profile.email}`} className={link}><Mail className="size-4" aria-hidden />{profile.email}</a>
            <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-lg bg-accent-2 px-4 py-2.5 font-medium text-zinc-950 transition hover:brightness-110"><Download className="size-4" aria-hidden />Resume</a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block"><span className="sr-only">Your name</span><input name="name" required placeholder="Your name" className={field} /></label>
            <label className="block"><span className="sr-only">Your email</span><input name="email" type="email" required placeholder="Your email" className={field} /></label>
            <label className="block"><span className="sr-only">Message</span><textarea name="message" required rows={5} placeholder="What would you like to build?" className={field} /></label>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-zinc-950 transition hover:brightness-110">
              <Send className="size-4" aria-hidden /> Send message
            </button>
            {sent && <p role="status" className="text-sm text-accent-2">Your mail app should open with the message ready to send.</p>}
          </form>
        </Reveal>
      </div>
      <p className="border-t border-line py-6 text-center text-xs text-zinc-400">© {new Date().getFullYear()} Sachin Mulge.</p>
    </footer>
  );
}
