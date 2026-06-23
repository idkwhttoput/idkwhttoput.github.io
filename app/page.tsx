import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, CodeXml as Github, Download, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const projects = [
  { title: "Monument", type: "Fintech platform", year: "2025", image: `${basePath}/project-monument.svg`, color: "bg-[#d7ff64]", tags: ["Product design", "Next.js", "Data viz"], description: "A calmer way for modern teams to understand cash flow, forecast runway, and make confident decisions." },
  { title: "Sonder", type: "Wellness companion", year: "2024", image: `${basePath}/project-sonder.svg`, color: "bg-[#efc8ff]", tags: ["Brand system", "React", "Motion"], description: "A thoughtful daily companion that turns mental wellness into an approachable, sustainable ritual." },
  { title: "Field Notes", type: "Travel journal", year: "2024", image: `${basePath}/project-fieldnotes.svg`, color: "bg-[#ff7a58]", tags: ["UX research", "TypeScript", "Maps"], description: "A private place to collect the moments, places, and stories that make a journey worth remembering." },
];

const skills = ["Product strategy", "UX / UI design", "Design systems", "Frontend development", "Creative direction", "Prototyping", "Accessibility", "Motion design"];
const experience = [
  { years: "2023 — Now", role: "Independent Designer & Developer", company: "Freelance", copy: "Partnering with early-stage teams to shape products from first sketch to shipped experience." },
  { years: "2020 — 2023", role: "Lead Product Designer", company: "Northstar Studio", copy: "Led a multidisciplinary team creating digital products for fintech, climate, and health startups." },
  { years: "2018 — 2020", role: "Product Designer", company: "Form & Function", copy: "Designed and prototyped responsive products used by over two million people worldwide." },
];

export default function Home() {
  return <main id="top" className="overflow-hidden bg-[#f6f5f0] text-[#20201e] transition-colors dark:bg-[#161614] dark:text-[#f4f2ea]">
    <Header />
    <section className="grid-noise relative flex min-h-[92svh] items-end border-b border-black/10 pt-32 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16">
        <div className="mb-12 flex items-center gap-3 text-sm font-bold uppercase tracking-[.16em]"><span className="size-2.5 animate-pulse rounded-full bg-[#f15b3a]"/>Available for select projects</div>
        <h1 className="display text-balance max-w-6xl text-[clamp(4.2rem,12vw,10rem)] font-semibold">I make digital things <span className="font-[family-name:var(--font-serif)] font-normal italic text-[#f15b3a]">feel human.</span></h1>
        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-black/15 pt-7 sm:flex-row sm:items-end dark:border-white/15">
          <p className="max-w-xl text-lg leading-relaxed text-black/60 dark:text-white/60">I’m Alex, an independent product designer and developer based in Brooklyn. I help ambitious teams turn complex ideas into clear, useful experiences.</p>
          <a href="#work" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest">Selected work <span className="grid size-11 place-items-center rounded-full border border-current transition group-hover:translate-y-1"><ArrowDown size={18}/></span></a>
        </div>
      </div>
    </section>

    <div aria-hidden="true" className="overflow-hidden border-b border-black/10 py-4 dark:border-white/10"><div className="marquee-track flex w-max gap-8 whitespace-nowrap text-sm font-extrabold uppercase tracking-[.18em] text-black/45 dark:text-white/40">{[...skills, ...skills].map((s,i)=><span key={i} className="flex items-center gap-8">{s}<b className="text-[#f15b3a]">✦</b></span>)}</div></div>

    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:py-36">
      <div><p className="text-sm font-bold uppercase tracking-[.16em] text-black/50 dark:text-white/50">01 / About me</p></div>
      <div><h2 className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-.04em] sm:text-6xl">Designing with curiosity, building with intention.</h2><div className="mt-10 grid gap-6 text-base leading-relaxed text-black/60 sm:grid-cols-2 dark:text-white/60"><p>I work across product strategy, interface design, and frontend development. That overlap helps me carry a strong idea all the way through, without losing the details that made it good.</p><p>Outside of work, you’ll find me collecting printed matter, making a very specific cup of coffee, or exploring a new corner of the city with my camera.</p></div><div className="mt-12 flex flex-wrap gap-3">{["7+ years experience","Brooklyn, NY","Available worldwide"].map(x=><span key={x} className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold dark:border-white/20">{x}</span>)}</div></div>
    </section>

    <section id="skills" className="bg-[#20201e] px-5 py-24 text-[#f5f2e9] sm:px-8 lg:py-32 dark:bg-[#f0eee6] dark:text-[#20201e]">
      <div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[.16em] opacity-50">02 / What I do</p><div className="mt-14 divide-y divide-white/15 border-y border-white/15 dark:divide-black/15 dark:border-black/15">{skills.map((s,i)=><div key={s} className="group flex items-center justify-between py-5 sm:py-7"><h3 className="text-2xl font-semibold tracking-tight transition group-hover:translate-x-3 sm:text-4xl"><span className="mr-5 align-middle text-xs font-bold opacity-35">0{i+1}</span>{s}</h3><ArrowUpRight className="opacity-25 transition group-hover:rotate-45 group-hover:opacity-100"/></div>)}</div></div>
    </section>

    <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-36">
      <div className="mb-14 flex items-end justify-between"><div><p className="text-sm font-bold uppercase tracking-[.16em] text-black/50 dark:text-white/50">03 / Selected work</p><h2 className="mt-5 text-5xl font-semibold tracking-[-.05em] sm:text-7xl">A few favorites.</h2></div><p className="hidden max-w-xs text-sm text-black/50 md:block dark:text-white/50">Strategy, design, and code for products that aim to leave things better than they found them.</p></div>
      <div className="space-y-16">{projects.map((p,i)=><article key={p.title} className="group grid gap-7 lg:grid-cols-[1.45fr_.55fr] lg:gap-12"><a href="https://example.com" aria-label={`View ${p.title} live demo`} className={`${p.color} relative block overflow-hidden rounded-[2rem] p-6 sm:p-10`} target="_blank" rel="noreferrer"><Image src={p.image} alt={`${p.title} interface preview`} width={1100} height={700} className="h-auto w-full rounded-xl shadow-2xl transition duration-700 group-hover:scale-[1.025]" priority={i===0}/><span className="absolute right-6 top-6 grid size-12 place-items-center rounded-full bg-white text-black opacity-0 shadow-lg transition group-hover:opacity-100"><ArrowUpRight/></span></a><div className="flex flex-col justify-between lg:py-4"><div><div className="flex justify-between text-xs font-bold uppercase tracking-widest text-black/45 dark:text-white/45"><span>{p.type}</span><span>{p.year}</span></div><h3 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">{p.title}</h3><p className="mt-5 leading-relaxed text-black/60 dark:text-white/60">{p.description}</p><div className="mt-6 flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="rounded-full border border-black/15 px-3 py-1.5 text-xs font-semibold dark:border-white/20">{t}</span>)}</div></div><div className="mt-8 flex gap-3"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label={`${p.title} GitHub repository`} className="grid size-11 place-items-center rounded-full border border-black/15 transition hover:bg-black hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black"><Github size={18}/></a><a href="https://example.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-black/15 px-5 text-sm font-bold transition hover:bg-black hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black">Live demo <ArrowUpRight size={16}/></a></div></div></article>)}</div>
    </section>

    <section id="experience" className="border-y border-black/10 bg-white/45 px-5 py-24 sm:px-8 lg:py-32 dark:border-white/10 dark:bg-white/[.025]">
      <div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-sm font-bold uppercase tracking-[.16em] text-black/50 dark:text-white/50">04 / Experience</p><h2 className="mt-5 text-5xl font-semibold tracking-[-.05em]">Where I’ve been.</h2></div><div className="divide-y divide-black/15 border-t border-black/15 dark:divide-white/15 dark:border-white/15">{experience.map(x=><div key={x.role} className="grid gap-3 py-8 sm:grid-cols-[150px_1fr]"><p className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40">{x.years}</p><div><h3 className="text-xl font-bold">{x.role}</h3><p className="mt-1 text-[#f15b3a]">{x.company}</p><p className="mt-4 max-w-xl leading-relaxed text-black/55 dark:text-white/55">{x.copy}</p></div></div>)}</div></div></div>
    </section>

    <section id="resume" className="mx-auto max-w-7xl px-5 py-20 sm:px-8"><div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#d7ff64] p-8 text-[#20201e] sm:flex-row sm:items-center sm:p-12"><div><p className="text-sm font-bold uppercase tracking-widest opacity-55">Need the full story?</p><h2 className="mt-2 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Take my résumé with you.</h2></div><a href={`${basePath}/resume.txt`} download className="flex shrink-0 items-center gap-3 rounded-full bg-[#20201e] px-6 py-4 font-bold text-white transition hover:scale-105">Download résumé <Download size={18}/></a></div></section>

    <section id="contact" className="px-5 py-24 sm:px-8 lg:py-36"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2"><div><p className="text-sm font-bold uppercase tracking-[.16em] text-black/50 dark:text-white/50">05 / Contact</p><h2 className="mt-6 text-balance text-6xl font-semibold leading-[.95] tracking-[-.055em] sm:text-8xl">Have a project in mind?</h2><p className="mt-8 max-w-md text-lg leading-relaxed text-black/55 dark:text-white/55">I’d love to hear about it. Send a note and let’s make something useful, memorable, and genuinely good.</p><div className="mt-10 space-y-3"><a href="mailto:hello@alexmorgan.design" className="flex items-center gap-3 font-bold hover:text-[#f15b3a]"><Mail size={18}/>hello@alexmorgan.design</a><p className="flex items-center gap-3 text-black/55 dark:text-white/55"><MapPin size={18}/>Brooklyn, New York</p></div></div><ContactForm/></div></section>

    <footer className="border-t border-black/10 px-5 py-8 sm:px-8 dark:border-white/10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm sm:flex-row sm:items-center"><p>© 2026 Alex Morgan. Built with care.</p><div className="flex gap-6 font-semibold"><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#f15b3a]">GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#f15b3a]">LinkedIn</a><a href="#top" className="flex items-center gap-1 hover:text-[#f15b3a]">Back to top <ArrowRight size={14} className="-rotate-90"/></a></div></div></footer>
  </main>;
}
