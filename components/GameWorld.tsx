"use client";

import Image from "next/image";
import {
  Archive,
  ArrowDown,
  ArrowRight,
  Award,
  Boxes,
  BriefcaseBusiness,
  CircleUserRound,
  Code2,
  ExternalLink,
  Github,
  Home,
  Instagram,
  Mail,
  Map,
  Menu,
  Radio,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { achievements, equipment, journey, projects, type Project } from "@/data/portfolio";
import AnimatedSection from "./AnimatedSection";
import EnergyCore from "./EnergyCore";

const navigation = [
  { id: "lobby", label: "LOBBY", icon: Home },
  { id: "character", label: "CHARACTER", icon: CircleUserRound },
  { id: "projects", label: "PROJECTS", icon: BriefcaseBusiness },
  { id: "archive", label: "ARCHIVE", icon: Archive },
  { id: "story", label: "STORY", icon: Map },
  { id: "equipment", label: "EQUIPMENT", icon: Boxes },
  { id: "records", label: "RECORDS", icon: Trophy },
  { id: "contact", label: "CONTACT", icon: Radio },
] as const;

type SectionId = (typeof navigation)[number]["id"];
type ArchiveItem = { title: string; label: string; image?: string; className: string; note: string };

const archiveItems: readonly ArchiveItem[] = [
  { title: "Task Interface Study", label: "UI CAPTURE / 001", image: "/project_01.png", className: "archive-wide", note: "A captured build from the Track Your Task interface." },
  { title: "Social Data Console", label: "RESEARCH / 002", image: "/project_02.png", className: "archive-tall", note: "A working screen from the NLP research project." },
  { title: "Route Signal", label: "MOTION STUDY / 003", className: "archive-route", note: "A procedural visual study inspired by mobile route tracking." },
  { title: "Local Exchange", label: "PRODUCT NOTE / 004", className: "archive-market", note: "A visual memory from exploring marketplace product patterns." },
] as const;

function SectionHeader({ code, eyebrow, title, copy }: { code: string; eyebrow: string; title: string; copy: string }) {
  return (
    <AnimatedSection className="world-section-head">
      <div className="section-glyph"><span>{code}</span><i /></div>
      <div>
        <p className="ui-kicker">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p className="section-debrief">{copy}</p>
    </AnimatedSection>
  );
}

function ProjectArt({ project }: { project: Project }) {
  if (project.visual === "world") {
    return (
      <div className="project-art project-art-world" aria-hidden="true">
        <svg className="settlement-scene" viewBox="0 0 640 340">
          <defs><linearGradient id="world-sky" x2="0" y2="1"><stop stopColor="#142e3d" /><stop offset="1" stopColor="#101522" /></linearGradient></defs>
          <rect width="640" height="340" fill="url(#world-sky)" />
          <circle cx="465" cy="66" r="27" fill="#d6d5b5" opacity=".7" />
          <path d="M0 190 85 95 180 193 290 75 407 184 555 100 640 190V340H0Z" fill="#132a30" />
          <path d="M0 235 95 172 207 255 333 148 470 233 572 175 640 229V340H0Z" fill="#1c3b3b" />
          <path d="M240 340 322 243 374 207 437 178" stroke="#988265" strokeWidth="25" fill="none" opacity=".5" />
          {[70,130,188,468,526,586].map((x,i)=><g key={x} transform={`translate(${x} ${200+i%3*26})`}><path d="m0-56-22 48h44ZM0-34-30 51h60Z" fill="#0c2627" /><path d="M-3 8h6v26h-6" fill="#222d29" /></g>)}
          {[{x:278,y:232},{x:366,y:268},{x:427,y:216}].map(({x,y})=><g key={x} transform={`translate(${x} ${y})`}><path d="M-25-11h50v40h-50" fill="#6b6c5a" /><path d="m-32-10 32-29 32 29Z" fill="#263d3e" /><rect x="-9" y="3" width="12" height="16" fill="#e6bb69" /><path d="M26 29V-4" stroke="#b09258" strokeWidth="2" /></g>)}
          <path d="M0 294Q180 245 640 297" stroke="#8fbfc5" strokeWidth="35" opacity=".08" fill="none" />
        </svg>
        <span className="art-caption">PROCEDURAL WORLD / VISUAL STUDY</span>
      </div>
    );
  }
  if (project.visual === "network") {
    return (
      <div className="project-art project-art-network" aria-hidden="true">
        <div className="network-address">https:// <span>ideas.into.reality</span><i /></div>
        <div className="network-stages">{["URL", "DNS", "TLS", "HTTP", "RENDER"].map((stage,index)=><div key={stage}><span>0{index+1}</span><i /><strong>{stage}</strong></div>)}</div>
        <div className="network-trace"><span>REQUEST → RESPONSE</span><b>200</b><span>EDUCATIONAL SIMULATION</span></div>
      </div>
    );
  }
  if (project.image) {
    return (
      <div className={`project-art project-art-${project.visual}`}>
        <Image alt={`${project.title} interface`} fill loading="eager" sizes="(max-width: 800px) 92vw, 56vw" src={project.image} />
        <div className="project-scan" />
      </div>
    );
  }

  return (
    <div className={`project-art project-art-${project.visual}`} aria-hidden="true">
      <div className="generated-grid" />
      <div className="generated-object">
        {project.visual === "runner" ? <><span>06.42</span><small>KM / ACTIVE ROUTE</small></> : <><span>LOCAL</span><small>DISCOVERY NETWORK</small></>}
      </div>
    </div>
  );
}

export default function GameWorld() {
  const [active, setActive] = useState<SectionId>("lobby");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArchive, setSelectedArchive] = useState<ArchiveItem | null>(null);
  const [selectedEquipment, setSelectedEquipment] = useState(0);
  const [expandedChapter, setExpandedChapter] = useState(3);
  const [projectFilter, setProjectFilter] = useState<"ALL" | Project["category"]>("ALL");
  const dialogRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const visibleProjects = projects.filter((project) => projectFilter === "ALL" || project.category === projectFilter);

  const closeOverlay = useCallback(() => {
    setSelectedProject(null);
    setSelectedArchive(null);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.18, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const overlayOpen = Boolean(selectedProject || selectedArchive || menuOpen);
    if (!overlayOpen) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = overlayOpen ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const container = selectedProject || selectedArchive ? dialogRef.current : navigationRef.current;
        const controls = Array.from(container?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);
        if (menuOpen && menuTriggerRef.current) controls.push(menuTriggerRef.current);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === container)) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === container)) {
          event.preventDefault(); first?.focus();
        }
      }
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      closeOverlay();
    };
    document.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => {
      if (selectedProject || selectedArchive) dialogRef.current?.focus();
      else navigationRef.current?.querySelector<HTMLButtonElement>("nav button")?.focus();
    }, 0);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus({ preventScroll: true });
    };
  }, [closeOverlay, menuOpen, selectedArchive, selectedProject]);

  const chooseSection = (id: SectionId) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  return (
    <main className="game-world">
      <a className="skip-link" href="#projects">Skip to projects</a>
      <div className="world-atmosphere" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <div className="world-noise" aria-hidden="true" />

      <header className="mobile-hud">
        <a className="world-mark" href="#lobby"><span>TT</span><small>DIGITAL WORLD</small></a>
        <div className="mobile-status"><i /> ONLINE</div>
        <button ref={menuTriggerRef} aria-controls="world-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? "Close world navigation" : "Open world navigation"} onClick={() => setMenuOpen((value) => !value)} type="button">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && <button className="navigation-backdrop" aria-label="Close navigation" onClick={() => setMenuOpen(false)} tabIndex={-1} type="button" />}
      <aside ref={navigationRef} id="world-navigation" className={`game-navigation ${menuOpen ? "is-open" : ""}`}>
        <a className="nav-crest" href="#lobby" onClick={() => setMenuOpen(false)}>
          <span>TT</span>
          <div><strong>THANAKORN</strong><small>DIGITAL WORLD</small></div>
        </a>
        <nav aria-label="World navigation">
          {navigation.map(({ id, label, icon: Icon }, index) => (
            <button aria-current={active === id ? "location" : undefined} className={active === id ? "is-active" : ""} key={id} onClick={() => chooseSection(id)} type="button">
              <span className="nav-index">{String(index + 1).padStart(2, "0")}</span>
              <Icon aria-hidden="true" size={18} />
              <span>{label}</span>
              <i />
            </button>
          ))}
        </nav>
        <div className="nav-system">
          <span><i /> SYSTEM ONLINE</span>
          <small>WEB · MOBILE · SIMULATION</small>
        </div>
      </aside>

      <div className="world-content">
        <section className="lobby section-stage" id="lobby">
          <div className="lobby-coordinates">WORLD 01 <i /> A PERSONAL SPACE FOR BUILDING</div>
          <div className="lobby-copy">
            <AnimatedSection>
              <p className="ui-kicker">WELCOME TO</p>
              <h1>THANAKORN&apos;S<br /><span>DIGITAL WORLD</span></h1>
              <p className="lobby-intro">Developer, creator, and explorer.<br />Building web, mobile, and interactive worlds.</p>
              <div className="lobby-actions">
                <button className="game-button game-button-primary" onClick={() => chooseSection("character")} type="button">START EXPLORING <ArrowRight size={17} /></button>
                <button className="game-button game-button-ghost" onClick={() => chooseSection("projects")} type="button">VIEW PROJECTS</button>
              </div>
              <a className="lobby-feature" href="#projects" onClick={(event) => { event.preventDefault(); chooseSection("projects"); }}><span>NEW CHAPTER / 2026</span><strong>Nocthollow & URL Journey</strong><ArrowRight size={17} /></a>
            </AnimatedSection>
          </div>
          <div className="lobby-core"><EnergyCore /></div>
          <aside className="lobby-hud hud-panel">
            <div className="hud-title"><span>LIVE FEED</span><Radio size={14} /></div>
            <div className="hud-avatar"><Image alt="Thanakorn" fill priority sizes="72px" src="/profile_img.jpg" /></div>
            <strong>THANAKORN</strong><small>DEVELOPER / CREATOR</small>
            <dl>
              <div><dt>CURRENT QUEST</dt><dd>Build something better</dd></div>
              <div><dt>LATEST BUILDS</dt><dd>Nocthollow · URL Journey</dd></div>
              <div><dt>STATUS</dt><dd className="status-online"><i /> ONLINE / BUILDING</dd></div>
            </dl>
          </aside>
          <button className="scroll-cue" onClick={() => chooseSection("character")} type="button"><span>ENTER WORLD</span><ArrowDown size={16} /></button>
        </section>

        <section className="section-stage character-section" id="character">
          <SectionHeader code="CHR" eyebrow="CHARACTER PROFILE" title="THE BUILDER" copy="A developer profile, presented as the main character of an evolving digital world." />
          <div className="character-layout">
            <AnimatedSection className="character-visual">
              <div className="character-frame"><Image alt="Portrait of Thanakorn Thongpraiwan" fill sizes="(max-width: 800px) 90vw, 38vw" src="/profile_img.jpg" /></div>
              <div className="character-level"><span>PLAYER ID</span><strong>TT / 001</strong></div>
              <div className="portrait-rings" aria-hidden="true" />
            </AnimatedSection>
            <AnimatedSection className="character-data" delay={1}>
              <p className="ui-kicker">ACTIVE CHARACTER</p>
              <h3>THANAKORN</h3>
              <p className="character-role">DEVELOPER <i /> CREATOR <i /> EXPLORER</p>
              <p className="character-bio">Computer Science student who likes turning ideas into things people can actually use. Most of my time goes into web, mobile, and data projects—connecting the pieces and making the final interface feel clear.</p>
              <div className="character-specs">
                <div><span>CLASS</span><strong>Developer</strong></div>
                <div><span>ROLE</span><strong>Builder / Explorer</strong></div>
                <div><span>STATUS</span><strong>Always Learning</strong></div>
                <div><span>FOCUS</span><strong>Web · Mobile · Data</strong></div>
              </div>
              <div className="objective-panel"><Sparkles size={18} /><div><span>CURRENT OBJECTIVE</span><strong>Build useful products and learn through every release.</strong></div></div>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-stage projects-section" id="projects">
          <SectionHeader code="PRJ" eyebrow="QUEST SELECTION" title="PROJECT ARCHIVE" copy="Web, mobile, data, and simulated worlds. Select a build to explore how it works." />
          <div className="project-toolbar">
            <div className="project-filters" aria-label="Filter projects">{(["ALL", "GAME", "WEB", "MOBILE", "DATA"] as const).map((category)=><button aria-pressed={projectFilter === category} key={category} onClick={()=>setProjectFilter(category)} type="button">{category}<span>{category === "ALL" ? projects.length : projects.filter(p=>p.category===category).length}</span></button>)}</div>
            <span className="project-count" aria-live="polite">{visibleProjects.length} BUILDS IN VIEW</span>
          </div>
          <div className="project-collection">
            {visibleProjects.map((project, index) => (
              <AnimatedSection className={`collectible-project project-slot-${index % 4 + 1}`} delay={(index % 3) as 0 | 1 | 2} key={project.id}>
                <button aria-label={`Inspect ${project.title}`} onClick={() => setSelectedProject(project)} type="button">
                  <ProjectArt project={project} />
                  <div className="project-rarity"><span>{project.status}</span><i /><i /><i /></div>
                  <div className="project-info"><small>{project.category} / ENTRY {String(index + 1).padStart(2, "0")}</small><h3>{project.title}</h3><p>{project.description}</p><div>{project.technologies.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}</div></div>
                  <span className="inspect-project">INSPECT <ArrowRight size={15} /></span>
                </button>
              </AnimatedSection>
            ))}
          </div>
          <a className="lab-entry" href="https://github.com/MIXThanakorn/go-web" target="_blank" rel="noreferrer"><Code2 size={22} /><div><span>BACKEND LAB / RECENT EXPLORATION</span><strong>Go Web Experiments</strong><p>Go HTTP servers, CRUD practice, and MySQL with GORM.</p></div><ExternalLink size={18} /></a>
          <a className="repository-link" href="https://github.com/MIXThanakorn?tab=repositories" target="_blank" rel="noreferrer"><Github size={18} /> EXPLORE ALL REPOSITORIES <ExternalLink size={15} /></a>
        </section>

        <section className="section-stage archive-section" id="archive">
          <SectionHeader code="ARC" eyebrow="MEMORY ARCHIVE" title="FRAGMENTS & EXPERIMENTS" copy="Screens, studies, and product memories from the process—not just the finished result." />
          <div className="archive-grid">
            {archiveItems.map((item, index) => (
              <AnimatedSection className={`archive-item ${item.className}`} delay={(index % 3) as 0 | 1 | 2} key={item.title}>
                <button onClick={() => setSelectedArchive(item)} type="button">
                  {item.image ? <Image alt={item.title} fill sizes="(max-width: 800px) 92vw, 45vw" src={item.image} /> : <div className="archive-procedural"><span>{item.title}</span><i /><i /><i /></div>}
                  <div className="archive-overlay"><small>{item.label}</small><strong>{item.title}</strong><span>OPEN MEMORY <ArrowRight size={14} /></span></div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="section-stage story-section" id="story">
          <SectionHeader code="STR" eyebrow="QUEST PROGRESSION" title="MY JOURNEY" copy="Not a finished story. A sequence of checkpoints that keep opening the next chapter." />
          <div className="journey-map">
            <div className="journey-path" aria-hidden="true" />
            {journey.map((event, index) => (
              <AnimatedSection className={`journey-event ${expandedChapter === index ? "is-expanded" : ""}`} delay={(index % 2) as 0 | 1} key={event.chapter}>
                <button aria-expanded={expandedChapter === index} onClick={() => setExpandedChapter(index)} type="button">
                  <span className="quest-node"><i />{event.chapter}</span>
                  <span className="quest-date">{event.date}</span>
                  <strong>{event.title}</strong>
                  <span className="quest-toggle">{expandedChapter === index ? "ACTIVE" : "VIEW"}</span>
                </button>
                <div className="quest-copy" hidden={expandedChapter !== index}><p>{event.description}</p><span>CHAPTER {event.chapter} / WORLD LOG</span></div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="section-stage equipment-section" id="equipment">
          <SectionHeader code="EQP" eyebrow="EQUIPMENT / LOADOUT" title="TOOLS IN ROTATION" copy="The technologies I keep reaching for when a new idea needs to become a working product." />
          <div className="loadout-layout">
            <div className="equipment-grid">
              {equipment.map((item, index) => (
                <button aria-pressed={selectedEquipment === index} className={selectedEquipment === index ? "is-equipped" : ""} key={item.name} onClick={() => setSelectedEquipment(index)} type="button">
                  <span>{item.code}</span><Code2 size={24} /><strong>{item.name}</strong><small>{item.category}</small><i />
                </button>
              ))}
            </div>
            <aside className="equipment-inspector hud-panel">
              <div className="hud-title"><span>ITEM INSPECTOR</span><Boxes size={15} /></div>
              <div className="equipment-emblem"><Code2 size={46} /></div>
              <small>{equipment[selectedEquipment].code} / EQUIPPED</small>
              <h3>{equipment[selectedEquipment].name}</h3>
              <dl><div><dt>CATEGORY</dt><dd>{equipment[selectedEquipment].category}</dd></div><div><dt>USED FOR</dt><dd>{equipment[selectedEquipment].description}</dd></div></dl>
            </aside>
          </div>
        </section>

        <section className="section-stage records-section" id="records">
          <SectionHeader code="REC" eyebrow="UNLOCKED RECORDS" title="ACHIEVEMENT VAULT" copy="Real milestones collected along the way—proof of practice, learning, and showing up." />
          <div className="records-vault">
            {achievements.map((achievement, index) => (
              <AnimatedSection className="record-card" delay={index as 0 | 1 | 2} key={achievement.title}>
                <div className="record-medal"><Award size={28} /><strong>{achievement.mark}</strong><i /></div>
                <div className="record-copy"><span>UNLOCKED / {achievement.date}</span><h3>{achievement.title}</h3><strong>{achievement.issuer}</strong><p>{achievement.description}</p></div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="section-stage contact-section" id="contact">
          <div className="contact-world">
            <AnimatedSection className="contact-message">
              <p className="ui-kicker">GUILD / PARTY REQUEST</p>
              <h2>LET&apos;S BUILD<br /><span>SOMETHING TOGETHER.</span></h2>
              <p>A project, an internship, or just a good idea—send a signal. I&apos;m always happy to talk about building things.</p>
            </AnimatedSection>
            <AnimatedSection className="contact-menu" delay={1}>
              <a href="mailto:kjn09402@gmail.com"><Mail /><span><small>PRIMARY CHANNEL</small>EMAIL</span><ArrowRight /></a>
              <a href="https://github.com/MIXThanakorn" rel="noreferrer" target="_blank"><Github /><span><small>BUILD ARCHIVE</small>GITHUB</span><ExternalLink /></a>
              <a href="https://instagram.com/lnw_mix" rel="noreferrer" target="_blank"><Instagram /><span><small>SOCIAL SIGNAL</small>INSTAGRAM</span><ExternalLink /></a>
            </AnimatedSection>
          </div>
          <footer><span>PLAY × CREATE × REPEAT</span><small>THANAKORN&apos;S DIGITAL WORLD · {new Date().getFullYear()}</small></footer>
        </section>
      </div>

      <nav className="mobile-dock" aria-label="Mobile quick navigation">
        {navigation.filter(({ id }) => ["lobby", "projects", "equipment", "contact"].includes(id)).map(({ id, label, icon: Icon }) => (
          <button className={active === id ? "is-active" : ""} key={id} onClick={() => chooseSection(id)} type="button"><Icon size={18} /><span>{label}</span></button>
        ))}
        <button aria-label="Open all destinations" onClick={() => setMenuOpen(true)} type="button"><Menu size={18} /><span>MENU</span></button>
      </nav>

      {(selectedProject || selectedArchive) && (
        <div className="world-modal" onMouseDown={(event) => event.target === event.currentTarget && closeOverlay()} role="presentation">
          <div aria-label={selectedProject ? `${selectedProject.title} project details` : `${selectedArchive?.title} archive details`} aria-modal="true" className="world-modal-panel" ref={dialogRef} role="dialog" tabIndex={-1}>
            <button aria-label="Close detail view" className="modal-close" onClick={closeOverlay} type="button"><X /></button>
            {selectedProject ? (
              <>
                <div className="modal-project-art"><ProjectArt project={selectedProject} /></div>
                <div className="modal-project-copy">
                  <p className="ui-kicker">PROJECT DATA / {selectedProject.category}</p><h2>{selectedProject.title}</h2><p className="modal-lead">{selectedProject.description}</p>
                  <div className="modal-facts"><div><span>PROJECT TYPE</span><strong>{selectedProject.status}</strong></div><div><span>{selectedProject.year === "—" ? "YEAR" : "REPOSITORY CREATED"}</span><strong>{selectedProject.year === "—" ? "Not documented" : selectedProject.year}</strong></div></div>
                  <section><span>PROBLEM</span><p>{selectedProject.problem}</p></section><section><span>CONCEPT</span><p>{selectedProject.concept}</p></section>
                  <div className="modal-tech">{selectedProject.technologies.map((item) => <span key={item}>{item}</span>)}</div>
                  {selectedProject.features && <section className="project-features"><span>WHAT YOU CAN EXPLORE</span><ul>{selectedProject.features.map(feature=><li key={feature}>{feature}</li>)}</ul></section>}
                  {selectedProject.demo && <a className="game-button game-button-ghost demo-button" href={selectedProject.demo} rel="noreferrer" target="_blank">TRY THE WORLD <ExternalLink size={16} /></a>}
                  <a className="game-button game-button-primary" href={selectedProject.source} rel="noreferrer" target="_blank">OPEN SOURCE <ExternalLink size={16} /></a>
                </div>
              </>
            ) : selectedArchive ? (
              <div className="archive-modal-content">
                <div className={`archive-modal-visual ${selectedArchive.className}`}>{selectedArchive.image ? <Image alt={selectedArchive.title} fill sizes="90vw" src={selectedArchive.image} /> : <div className="archive-procedural"><span>{selectedArchive.title}</span><i /><i /><i /></div>}</div>
                <div><p className="ui-kicker">{selectedArchive.label}</p><h2>{selectedArchive.title}</h2><p>{selectedArchive.note}</p></div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </main>
  );
}
