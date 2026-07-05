import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ── Mascot SVGs ────────────────────────────────────────────────── */

function CatNavIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 7.5 L4 14 Q4 17.5 7.5 17.5 L14.5 17.5 Q18 17.5 18 14 L18 7.5 L15.5 10 L6.5 10 Z"
        stroke="#1A1A1A" strokeWidth="1.25" fill="none" strokeLinejoin="round"
      />
      <path d="M6.5 10 L4 4.5 L8.5 7.5" stroke="#1A1A1A" strokeWidth="1.25" fill="none" strokeLinejoin="round"/>
      <path d="M15.5 10 L18 4.5 L13.5 7.5" stroke="#1A1A1A" strokeWidth="1.25" fill="none" strokeLinejoin="round"/>
      <path d="M8.5 13 Q9 12.4 9.5 13" stroke="#1A1A1A" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M12.5 13 Q13 12.4 13.5 13" stroke="#1A1A1A" strokeWidth="1.1" strokeLinecap="round"/>
      <circle cx="11" cy="14.5" r="0.45" fill="#1A1A1A"/>
      <line x1="7.5" y1="14.5" x2="5" y2="14" stroke="#1A1A1A" strokeWidth="0.7" strokeLinecap="round"/>
      <line x1="7.5" y1="15.2" x2="5" y2="15.8" stroke="#1A1A1A" strokeWidth="0.7" strokeLinecap="round"/>
      <line x1="14.5" y1="14.5" x2="17" y2="14" stroke="#1A1A1A" strokeWidth="0.7" strokeLinecap="round"/>
      <line x1="14.5" y1="15.2" x2="17" y2="15.8" stroke="#1A1A1A" strokeWidth="0.7" strokeLinecap="round"/>
    </svg>
  );
}

function CatSectionMarker() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 4.5 L2 9 Q2 11.5 4.5 11.5 L8.5 11.5 Q11 11.5 11 9 L11 4.5 L9.5 6 L3.5 6 Z"
        stroke="#1A1A1A" strokeWidth="1" fill="none" strokeLinejoin="round" opacity="0.4"
      />
      <path d="M3.5 6 L2 2.5 L5 4.5" stroke="#1A1A1A" strokeWidth="1" fill="none" strokeLinejoin="round" opacity="0.4"/>
      <path d="M9.5 6 L11 2.5 L8 4.5" stroke="#1A1A1A" strokeWidth="1" fill="none" strokeLinejoin="round" opacity="0.4"/>
      <path d="M5 8 Q5.3 7.6 5.6 8" stroke="#1A1A1A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
      <path d="M7.4 8 Q7.7 7.6 8 8" stroke="#1A1A1A" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

function SleepingCat() {
  return (
    <svg width="96" height="52" viewBox="0 0 96 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* body ellipse */}
      <ellipse cx="52" cy="40" rx="38" ry="12" fill="#1A1A1A" opacity="0.12"/>
      <ellipse cx="50" cy="38" rx="36" ry="11" fill="#1A1A1A" opacity="0.85"/>
      {/* head */}
      <circle cx="22" cy="28" r="13" fill="#1A1A1A" opacity="0.85"/>
      {/* ears */}
      <polygon points="14,18 10,10 19,16" fill="#1A1A1A"/>
      <polygon points="26,17 24,9 31,14" fill="#1A1A1A"/>
      {/* tail */}
      <path d="M84 38 Q94 26 82 20 Q76 16 78 26" stroke="#1A1A1A" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.85"/>
      {/* closed eyes */}
      <path d="M17 28 Q19 27 21 28" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M23 28 Q25 27 27 28" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      {/* tiny nose */}
      <circle cx="22" cy="30.5" r="0.8" fill="white" opacity="0.6"/>
      {/* zzz */}
      <text x="2" y="18" fontFamily="'JetBrains Mono', monospace" fontSize="7" fill="#1A1A1A" opacity="0.25">z</text>
      <text x="7" y="12" fontFamily="'JetBrains Mono', monospace" fontSize="8" fill="#1A1A1A" opacity="0.18">z</text>
      <text x="13" y="6" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#1A1A1A" opacity="0.12">z</text>
    </svg>
  );
}

/* ── Shared components ──────────────────────────────────────────── */

function TechPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 border border-[#1A1A1A]/15 text-[10px] font-mono text-[#1A1A1A]/45 tracking-[0.12em] uppercase"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {label}
    </span>
  );
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span
        className="text-[10px] text-[#1A1A1A]/20 tracking-[0.25em] uppercase select-none"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {index}
      </span>
      <CatSectionMarker />
      <span
        className="text-[11px] text-[#1A1A1A]/40 tracking-[0.18em] uppercase"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {title}
      </span>
      <div className="flex-1 h-px bg-[#1A1A1A]/8 ml-1" />
    </div>
  );
}

function Hairline() {
  return (
    <div className="max-w-5xl mx-auto px-8 lg:px-12">
      <div className="h-px bg-[#1A1A1A]/8" />
    </div>
  );
}

/* ── App ────────────────────────────────────────────────────────── */

export default function App() {
  const [activeSection] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen bg-[#F9F9F6] text-[#1A1A1A]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F6]/90 backdrop-blur-md border-b border-[#1A1A1A]/[0.07]">
        <div className="max-w-5xl mx-auto px-8 lg:px-12 h-[52px] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <CatNavIcon />
            <span className="text-[13px] font-medium tracking-[0.01em] text-[#1A1A1A]">
              Horatius Julien
            </span>
          </div>
          <div className="flex items-center gap-7">
            <a
              href="https://github.com/jhoratius"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors tracking-[0.15em] uppercase flex items-center gap-1"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              GitHub <ArrowUpRight size={9} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors tracking-[0.15em] uppercase flex items-center gap-1"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              LinkedIn <ArrowUpRight size={9} />
            </a>
            <a
              href="mailto:horatius.julien@example.com"
              className="text-[11px] text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors tracking-[0.15em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-40 pb-32 max-w-5xl mx-auto px-8 lg:px-12">
        <div className="mb-8">
          <span
            className="text-[10px] text-[#1A1A1A]/25 tracking-[0.35em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Portfolio — 2026
          </span>
        </div>

        <h1 className="text-[54px] leading-[1.08] tracking-[-0.025em] font-light text-[#1A1A1A] max-w-[660px] mb-10">
          Horatius Julien
          <span className="block text-[#1A1A1A]/20">— Digital Technologies</span>
          <span className="block text-[#1A1A1A]/20">Architect.</span>
        </h1>

        <p className="text-[15px] leading-[1.75] text-[#1A1A1A]/45 max-w-[480px] font-normal mb-14">
          Engineering data workflows, optimizing low-level systems,<br />
          and architecting physical hardware layouts.
        </p>

        <div className="flex items-center gap-8 flex-wrap">
          {["Data Science", "Low-Level Systems", "Embedded Hardware"].map((d) => (
            <div key={d} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/18" />
              <span
                className="text-[10px] text-[#1A1A1A]/35 tracking-[0.18em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {d}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Hairline />

      {/* ── 01 MACHINE LEARNING & DATA SCIENCE ── */}
      <section className="py-24 max-w-5xl mx-auto px-8 lg:px-12">
        <SectionHeader index="01" title="Machine Learning & Data Science" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] border border-[#1A1A1A]/10 bg-[#1A1A1A]/10">
          {/* Card 1 */}
          <div className="bg-[#F9F9F6] p-8 hover:bg-[#F4F4F0] transition-colors duration-300 group">
            <div className="flex items-start justify-between mb-6">
              <span
                className="text-[10px] text-[#1A1A1A]/22 tracking-[0.2em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Project_01
              </span>
              <a
                href="#"
                className="text-[10px] text-[#1A1A1A]/25 hover:text-[#1A1A1A] transition-colors tracking-[0.12em] uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                View Project <ArrowUpRight size={9} />
              </a>
            </div>
            <h3 className="text-[18px] font-medium leading-snug tracking-[-0.015em] mb-3">
              Linear Regression Algorithm
            </h3>
            <p className="text-[13px] text-[#1A1A1A]/48 leading-[1.75] mb-8">
              Built from scratch to predict car prices based on mileage. Implements
              gradient descent without external ML libraries — a first-principles
              demonstration of supervised learning mechanics.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "Pandas", "Matplotlib"].map((t) => (
                <TechPill key={t} label={t} />
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F9F9F6] p-8 hover:bg-[#F4F4F0] transition-colors duration-300 group">
            <div className="flex items-start justify-between mb-6">
              <span
                className="text-[10px] text-[#1A1A1A]/22 tracking-[0.2em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Project_02
              </span>
            </div>
            <h3 className="text-[18px] font-medium leading-snug tracking-[-0.015em] mb-3">
              Piscine Python for Data Science
            </h3>
            <p className="text-[13px] text-[#1A1A1A]/48 leading-[1.75] mb-8">
              Intensive manipulation of dataframes, graphs, and object-oriented
              paradigms. Structured data exploration pipelines with Matplotlib,
              Pandas, and Seaborn across real datasets.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "Pandas", "Matplotlib", "Seaborn", "MySQL"].map((t) => (
                <TechPill key={t} label={t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Hairline />

      {/* ── 02 LOW-LEVEL SYSTEMS ── */}
      <section className="py-24 max-w-5xl mx-auto px-8 lg:px-12">
        <SectionHeader index="02" title="Low-Level Systems & Core C/C++" />

        <div className="space-y-0">
          {[
            {
              idx: "Project_01",
              title: "Push Swap",
              desc: "A large-scale high-performance sorting algorithm built entirely in C. Heavily optimized for memory management and system efficiency — operates on two stacks under a constrained instruction set with minimal complexity bounds.",
              tags: ["C", "Linux", "Unix Shell"],
            },
            {
              idx: "Project_02",
              title: "Inception Infrastructure",
              desc: "A resilient, multi-container Docker infrastructure orchestrating Nginx, WordPress, and MariaDB. Services are bound via dedicated network routing and secured with TLS — zero external orchestration tooling.",
              tags: ["Docker", "Docker-Compose", "Linux", "Nginx"],
            },
          ].map((p) => (
            <div
              key={p.idx}
              className="border-b border-[#1A1A1A]/8 py-9 grid grid-cols-[100px_1fr] lg:grid-cols-[100px_1fr_220px] gap-6 lg:gap-10 items-start hover:bg-[#1A1A1A]/[0.018] transition-colors px-2 -mx-2 group"
            >
              <span
                className="text-[10px] text-[#1A1A1A]/20 tracking-[0.2em] uppercase pt-0.5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {p.idx}
              </span>
              <div>
                <h3 className="text-[18px] font-medium tracking-[-0.015em] mb-2.5">{p.title}</h3>
                <p className="text-[13px] text-[#1A1A1A]/48 leading-[1.75] max-w-xl">{p.desc}</p>
              </div>
              <div className="hidden lg:flex flex-col gap-1.5 items-end pt-0.5">
                {p.tags.map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-1.5">
          {["C", "C++", "Docker", "Docker-Compose", "Linux", "Unix Shell"].map((t) => (
            <TechPill key={t} label={t} />
          ))}
        </div>
      </section>

      <Hairline />

      {/* ── 03 EMBEDDED SYSTEMS & HARDWARE ── */}
      <section className="py-24 max-w-5xl mx-auto px-8 lg:px-12">
        <SectionHeader index="03" title="Embedded Systems & Hardware Design" />

        <div className="space-y-16">
          {/* Project 1 — Hardware-first */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span
                className="block text-[10px] text-[#1A1A1A]/22 tracking-[0.2em] uppercase mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Project_01 — Hardware
              </span>
              <h3 className="text-[22px] font-medium tracking-[-0.015em] leading-snug mb-2">
                Electrosluch
              </h3>
              <p className="text-[14px] text-[#1A1A1A]/35 font-normal mb-5 tracking-[0.01em]">
                Portable Electromagnetic Field Sensor
              </p>
              <p className="text-[13px] text-[#1A1A1A]/48 leading-[1.75] mb-7">
                Complete hardware product development lifecycle: designed electronic
                schematics in KiCad, routed high-signal-integrity compact PCBs, and
                modeled a 3D-printed enclosure using parametric Fusion 360 design.
                From schematic capture to physical object.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["KiCad", "Fusion 360", "PCB Design"].map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </div>

            <div className="border border-[#1A1A1A]/10 p-6 bg-[#F0F0EC]">
              <div
                className="text-[10px] text-[#1A1A1A]/25 tracking-[0.2em] uppercase mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Hardware Stack
              </div>
              <div className="space-y-0">
                {[
                  ["Schematic Design", "KiCad EDA"],
                  ["PCB Layout", "2-layer, high-SI routing"],
                  ["Enclosure", "Fusion 360 / FDM Print"],
                  ["Signal Domain", "Electromagnetic Field"],
                  ["Form Factor", "Portable handheld"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between items-baseline py-3 border-b border-[#1A1A1A]/7 last:border-0"
                  >
                    <span
                      className="text-[11px] text-[#1A1A1A]/35"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {k}
                    </span>
                    <span
                      className="text-[11px] text-[#1A1A1A]/65"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project 2 — Firmware-first (reversed) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="border border-[#1A1A1A]/10 p-6 bg-[#F0F0EC] order-2 lg:order-1">
              <div
                className="text-[10px] text-[#1A1A1A]/25 tracking-[0.2em] uppercase mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Firmware Stack
              </div>
              <div className="space-y-0">
                {[
                  ["Language", "Bare-metal C"],
                  ["Communication", "I2C / SPI Protocol"],
                  ["Sensor", "AHT20 Temp/Humidity"],
                  ["Architecture", "ARM / AVR MCU"],
                  ["Abstraction Layer", "None — direct registers"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between items-baseline py-3 border-b border-[#1A1A1A]/7 last:border-0"
                  >
                    <span
                      className="text-[11px] text-[#1A1A1A]/35"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {k}
                    </span>
                    <span
                      className="text-[11px] text-[#1A1A1A]/65"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span
                className="block text-[10px] text-[#1A1A1A]/22 tracking-[0.2em] uppercase mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Project_02 — Firmware
              </span>
              <h3 className="text-[22px] font-medium tracking-[-0.015em] leading-snug mb-2">
                Piscine Embedded
              </h3>
              <p className="text-[14px] text-[#1A1A1A]/35 font-normal mb-5 tracking-[0.01em]">
                Sensor Interfacing & Bare-Metal Programming
              </p>
              <p className="text-[13px] text-[#1A1A1A]/48 leading-[1.75] mb-7">
                Bare-metal C microcontroller programming, implementing real-time I2C
                protocol communication with AHT20 temperature/humidity sensors, and
                driving physical actuators — all without an OS abstraction layer.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Bare-metal C", "I2C", "SPI", "ARM/AVR"].map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-1.5">
          {["KiCad", "Fusion 360", "Bare-metal C", "Microcontrollers (ARM/AVR)", "I2C", "SPI"].map((t) => (
            <TechPill key={t} label={t} />
          ))}
        </div>
      </section>

      <Hairline />

      {/* ── 04 HACKATHONS ── */}
      <section className="py-24 max-w-5xl mx-auto px-8 lg:px-12">
        <SectionHeader index="04" title="Hackathons & Experimental Laboratory" />

        <div className="space-y-0">
          {[
            {
              tag: "72h Sprint",
              title: "WWDC Apple × 42 Paris Hackathon",
              desc: "3-day rapid application prototyping using Swift UI, Xcode, and Codex. Competitive environment co-organized with Apple engineers at 42 Paris campus.",
              link: "https://github.com/cduchinois/Komo_hackathonapple",
              linkLabel: "cduchinois/Komo_hackathonapple",
              tech: ["Swift UI", "Xcode", "Codex"],
            },
            {
              tag: "Hackathon",
              title: "Epitech Hackathon",
              desc: "Advanced collaborative development and technical problem-solving under strict time and resource constraints. Architecture decisions made in real-time under competitive pressure.",
              link: "https://github.com/jhoratius/hackathon-epitech",
              linkLabel: "jhoratius/hackathon-epitech",
              tech: ["Collaborative Dev", "Systems Architecture"],
            },
            {
              tag: "AI Hackathon",
              title: "Gemini 3 Hackathon",
              desc: "Built an animal relocation solution utilizing Replit, Gemini, and Google Antigravity. Rapid AI integration and product framing under competition constraints.",
              link: null,
              linkLabel: null,
              tech: ["Gemini", "Replit", "Google Antigravity"],
            },
          ].map((h, i) => (
            <div
              key={h.title}
              className="border-b border-[#1A1A1A]/8 py-9 grid grid-cols-[96px_1fr] gap-7 items-start hover:bg-[#1A1A1A]/[0.018] transition-colors px-2 -mx-2 group"
            >
              <div className="pt-0.5">
                <span
                  className="inline-block text-[9px] tracking-[0.18em] uppercase text-[#1A1A1A]/30 border border-[#1A1A1A]/15 px-2 py-1"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {h.tag}
                </span>
              </div>
              <div>
                <h3 className="text-[17px] font-medium tracking-[-0.012em] mb-2.5">{h.title}</h3>
                <p className="text-[13px] text-[#1A1A1A]/48 leading-[1.75] mb-5 max-w-xl">{h.desc}</p>
                <div className="flex items-center gap-5 flex-wrap">
                  <div className="flex gap-1.5 flex-wrap">
                    {h.tech.map((t) => (
                      <TechPill key={t} label={t} />
                    ))}
                  </div>
                  {h.link && (
                    <a
                      href={h.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-[#1A1A1A]/28 hover:text-[#1A1A1A]/70 transition-colors tracking-[0.1em] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {h.linkLabel} <ArrowUpRight size={9} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#1A1A1A]/8 py-20">
        <div className="max-w-5xl mx-auto px-8 lg:px-12 flex flex-col items-center gap-8">
          <SleepingCat />
          <div className="flex flex-col items-center gap-2">
            <p
              className="text-[11px] text-[#1A1A1A]/28 tracking-[0.1em] text-center"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Designed with minimalist restraint. Built for systems that breathe gently.
            </p>
            <p
              className="text-[10px] text-[#1A1A1A]/20 tracking-[0.08em] text-center"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              © 2026 Horatius Julien.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
