"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { FormEvent, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (message.length < 10) next.message = "Tell me a little more (at least 10 characters).";
    setErrors(next);
    if (!Object.keys(next).length) { setSent(true); event.currentTarget.reset(); }
  }
  if (sent) return <div role="status" className="flex min-h-96 flex-col items-center justify-center rounded-[2rem] bg-[#d7ff64] p-8 text-center text-[#20201e]"><span className="mb-5 grid size-14 place-items-center rounded-full bg-black text-white"><Check /></span><h3 className="text-3xl font-semibold tracking-tight">Message received.</h3><p className="mt-3 max-w-sm text-black/65">Thanks for reaching out. I’ll get back to you within two business days.</p><button onClick={() => setSent(false)} className="mt-7 text-sm font-bold underline underline-offset-4">Send another</button></div>;
  const field = "w-full border-b border-current/20 bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-current/35 focus:border-current";
  return <form onSubmit={submit} noValidate className="space-y-7">
    <label className="block text-sm font-semibold">Your name<input name="name" className={field} placeholder="Jane Smith" aria-describedby="name-error" />{errors.name && <span id="name-error" className="mt-2 block text-xs text-red-600 dark:text-red-400">{errors.name}</span>}</label>
    <label className="block text-sm font-semibold">Email address<input name="email" type="email" className={field} placeholder="jane@company.com" aria-describedby="email-error" />{errors.email && <span id="email-error" className="mt-2 block text-xs text-red-600 dark:text-red-400">{errors.email}</span>}</label>
    <label className="block text-sm font-semibold">Tell me about your project<textarea name="message" rows={4} className={`${field} resize-none`} placeholder="A few words about what you’re building..." aria-describedby="message-error" />{errors.message && <span id="message-error" className="mt-2 block text-xs text-red-600 dark:text-red-400">{errors.message}</span>}</label>
    <button className="group flex w-full items-center justify-between rounded-full bg-[#20201e] px-6 py-4 font-bold text-white transition hover:bg-[#f15b3a] dark:bg-white dark:text-black dark:hover:bg-[#d7ff64]">Send message <ArrowUpRight size={19} className="transition group-hover:rotate-45" /></button>
  </form>;
}
