"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Award, Braces, Check, Code2, Copy, Database, Github, Globe2, Instagram, Layers, Mail, Menu, Monitor, MousePointer2, Search, Smartphone, Sparkles, Trophy, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { achievements, equipment, projects, type Project } from "@/data/portfolio";
import styles from "./EditorialPortfolio.module.css";

const capabilities = [
  { icon: Monitor, title: "WEB DEVELOPMENT", copy: "Responsive interfaces and full-stack applications, built for clarity and everyday use." },
  { icon: Smartphone, title: "MOBILE EXPERIENCES", copy: "Cross-platform applications that bring useful ideas into your pocket." },
  { icon: Globe2, title: "INTERACTIVE WORLDS", copy: "Procedural environments and simulations that reward curiosity." },
  { icon: MousePointer2, title: "INTERFACE SYSTEMS", copy: "Reusable components with thoughtful states and intuitive interactions." },
  { icon: Database, title: "DATA & BACKEND", copy: "Connecting interfaces to authentication, storage, APIs, and meaningful data." },
  { icon: Braces, title: "CREATIVE EXPERIMENTS", copy: "Small prototypes that turn a new question into something you can explore." },
] as const;
const process = [
  { title: "DISCOVER", copy: "Understand the problem, the people, and what needs to work.", icon: Search },
  { title: "DEFINE", copy: "Connect the requirements and give the idea a clear direction.", icon: MousePointer2 },
  { title: "DESIGN", copy: "Shape the interface, interactions, and the details that matter.", icon: Layers },
  { title: "DEVELOP", copy: "Bring it to life with reusable code and connected systems.", icon: Code2 },
  { title: "REFINE", copy: "Test, listen, and keep improving the experience.", icon: Sparkles },
] as const;

const toolMarks: Record<string, string> = { "NEXT.JS": "N", "TYPESCRIPT": "TS", "REACT": "Re", "REACT NATIVE": "RN", "SUPABASE": "S", "PYTHON": "Py", "TAILWIND": "Tw", "GIT": "Git" };
const capabilityCategories = ["WEB", "MOBILE", "GAME", "WEB", "DATA", "ALL"] as const;
const processDetails = [
  "Start with the people using the product: what are they trying to do, what gets in the way, and what would make the experience useful?",
  "Turn the problem into a small scope, a clear user flow, and a list of things the first working version needs to achieve.",
  "Explore layout and interaction states, then check that the interface stays understandable on small screens and with a keyboard.",
  "Build the components, connect the data, and keep the implementation easy to change as the idea develops.",
  "Walk through the important flows, check responsive behavior, and improve the details that make the product easier to use.",
] as const;

function ProjectPreview({ project }: { project: Project }) {
  if (project.image) return <Image src={project.image} alt={`${project.title} interface preview`} fill sizes="(max-width: 700px) 90vw, 33vw" />;
  if (project.visual === "world") return <div className={styles.worldPreview} aria-hidden="true"><div className={styles.moon} /><div className={styles.mountain} /><div className={styles.town}><i /><i /><i /><i /><i /></div><span>NOCTHOLLOW</span><small>A WORLD THAT REMEMBERS.</small></div>;
  if (project.visual === "network") return <div className={styles.networkPreview} aria-hidden="true"><div className={styles.browserBar}><i /><i /><i /><span>URL JOURNEY</span></div><div className={styles.networkNodes}>{["URL", "DNS", "TLS", "HTTP"].map(label=><span key={label}><Globe2 size={18} />{label}</span>)}</div><div className={styles.waterfall}><i /><i /><i /><i /></div><small>FROM REQUEST TO REALITY.</small></div>;
  return <div className={styles.mobilePreview} aria-hidden="true"><div className={styles.phone}><div className={styles.phoneNotch} /><span>{project.visual === "runner" ? "YOUR NEXT MILE" : "DISCOVER LOCAL"}</span><strong>{project.visual === "runner" ? "06.42" : "LocoMall"}</strong><div className={styles.phoneRing} /><small>{project.visual === "runner" ? "KEEP MOVING FORWARD" : "GOOD FINDS. CLOSE TO HOME."}</small></div></div>;
}

export default function EditorialPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [category, setCategory] = useState("ALL");
  const [query, setQuery] = useState("");
  const [activeTool, setActiveTool] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeAward, setActiveAward] = useState<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const visibleProjects = (showAll ? projects : [projects[0], projects[1], projects[3]]).filter(project => (category === "ALL" || project.category === category) && `${project.title} ${project.description} ${project.technologies.join(" ")}`.toLowerCase().includes(query.toLowerCase().trim()));
  const modalOpen = Boolean(selected || contactOpen || activeAward !== null);
  const relatedProjects = activeTool === null ? [] : projects.filter(project => project.technologies.some(technology => technology.toLowerCase().replace(" css", "") === equipment[activeTool].name.toLowerCase()));

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      opener.current?.focus({ preventScroll: true });
    };
  }, [modalOpen]);

  const closeDialog = () => { setSelected(null); setContactOpen(false); setActiveAward(null); setCopyMessage(""); setCopied(false); };
  const openContact = (trigger: HTMLElement) => { opener.current = trigger; setContactOpen(true); };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText("kjn09402@gmail.com"); setCopied(true); setCopyMessage("Email copied. Paste it into your preferred email app."); }
    catch { setCopyMessage("Select and copy the email address above, or use Open email app."); }
  };
  const filterProjects = (nextCategory: string) => {
    setShowAll(true); setCategory(nextCategory); setQuery("");
    document.getElementById("work")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  const openProject = (project: Project, trigger: HTMLElement) => {
    opener.current = trigger;
    setSelected(project);
  };

  return (
    <main className={styles.portfolio} id="top">
      <a className={styles.skip} href="#work">Skip to work</a>
      <div className={styles.shell}>
        <header className={styles.header}>
          <a className={styles.monogram} href="#top" aria-label="Thanakorn home">T<span>K</span></a>
          <nav id="editorial-navigation" className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ""}`} aria-label="Main navigation">
            {["WORK", "CAPABILITIES", "ABOUT", "CONTACT"].map(label=><a key={label} href={`#${label.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{label}</a>)}
          </nav>
          <button className={styles.talkButton} onClick={event=>openContact(event.currentTarget)} type="button">LET&apos;S TALK <ArrowUpRight size={15} /></button>
          <button className={styles.menuToggle} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-controls="editorial-navigation" aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)} type="button">{menuOpen ? <X /> : <Menu />}</button>
        </header>

        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroOrbit} aria-hidden="true" />
          <div className={styles.portrait}><Image src="/portrait-editorial-v3.png" alt="AI-restyled studio portrait of Thanakorn, based on his original photograph" fill priority sizes="(max-width: 700px) 100vw, 85vw" /></div>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>IDEAS INTO INTERACTIVE EXPERIENCES</p>
            <h1 id="hero-title"><span>DIGITAL</span><span>DEVELOPER</span></h1>
            <p className={styles.heroDescription}>I&apos;m Thanakorn. I turn ideas into thoughtful web apps,<br className={styles.desktopBreak} /> mobile experiences, and worlds worth exploring.</p>
            <div className={styles.heroActions}><a className={styles.silverButton} href="#work">VIEW MY WORK <ArrowUpRight size={17} /></a><a className={styles.quietButton} href="https://github.com/MIXThanakorn" target="_blank" rel="noreferrer">EXPLORE GITHUB <Github size={15} /></a></div>
          </div>
          <div className={styles.heroSide}><span className={styles.star}>✦</span><small>CURIOUS BY NATURE</small><strong>ALWAYS<br />BUILDING</strong><span>WEB · MOBILE · DATA</span></div>
          <a className={styles.scrollHint} href="#work" aria-label="Scroll to selected work"><ArrowDown size={16} /></a>
        </section>

        <section className={styles.metrics} aria-label="Portfolio at a glance">
          <div><a href="#work" onClick={()=>{setShowAll(true);setCategory("ALL");setQuery("");}}><Sparkles size={25} /><strong>{projects.length}</strong><small>EXPLORE PROJECTS ↗</small></a></div>
          <div><a href="#capabilities"><Layers size={25} /><strong>04</strong><small>EXPLORE CAPABILITIES ↗</small></a></div>
          <div><a href="#recognition"><Trophy size={25} /><strong>{achievements.length.toString().padStart(2,"0")}</strong><small>VIEW ACHIEVEMENTS ↗</small></a></div>
          <div><a href="#tools"><Code2 size={25} /><strong>{equipment.length.toString().padStart(2,"0")}</strong><small>EXPLORE THE TOOLKIT ↗</small></a></div>
        </section>

        <section className={styles.work} id="work">
          <div className={styles.sectionTop}><h2>FEATURED WORK</h2><button type="button" onClick={()=>{setShowAll(!showAll);setCategory("ALL");setQuery("");}} aria-expanded={showAll}>{showAll ? "SHOW SELECTED WORK" : "EXPLORE ALL PROJECTS"} <ArrowRight size={17} /></button></div>
          {showAll && <div className={styles.projectControls}><div aria-label="Filter projects" className={styles.filters}>{["ALL", "WEB", "MOBILE", "GAME", "DATA"].map(value=><button key={value} aria-pressed={category===value} onClick={()=>setCategory(value)} type="button">{value}</button>)}</div><label className={styles.search}><Search size={16} /><input aria-label="Search projects" placeholder="Search projects or technology…" value={query} onChange={event=>setQuery(event.target.value)} /></label></div>}
          {showAll && <p className={styles.resultCount} aria-live="polite">{visibleProjects.length} projects found</p>}
          <div className={styles.workGrid}>
            {visibleProjects.map(project=><button className={styles.projectCard} key={project.id} onClick={event=>openProject(project,event.currentTarget)} type="button" aria-label={`View ${project.title}`}><div className={styles.preview}><ProjectPreview project={project} /></div><div className={styles.projectShade} /><div className={styles.projectCopy}><h3>{project.title}</h3><span>{project.category === "GAME" ? "WORLD SIMULATION" : `${project.category} DEVELOPMENT`}</span><small>{project.technologies.slice(0,2).join(" / ")}</small></div><span className={styles.roundArrow}><ArrowUpRight size={24} /></span></button>)}
          </div>
          {visibleProjects.length === 0 && <div className={styles.emptyState}><Search size={24} /><p>No projects match this search.</p><button type="button" onClick={()=>{setCategory("ALL");setQuery("");}}>Reset filters <ArrowRight size={15} /></button></div>}
          {showAll && <a className={styles.labLink} href="https://github.com/MIXThanakorn/go-web" target="_blank" rel="noreferrer"><Code2 size={20} /><span>IN THE LAB <strong>Go HTTP, CRUD & database experiments</strong></span><ArrowUpRight size={20} /></a>}
        </section>

        <section className={styles.details} id="capabilities">
          <div className={styles.capabilities}><h2 className={styles.sectionLabel}>CORE CAPABILITIES <small>SELECT TO EXPLORE WORK</small></h2><div className={styles.capabilityGrid}>{capabilities.map(({icon:Icon,title,copy},index)=><article key={title}><button className={styles.capabilityButton} onClick={()=>filterProjects(capabilityCategories[index])} type="button" aria-label={`Explore ${title.toLowerCase()} projects`}><Icon size={34} strokeWidth={1} /><div><h3>{title} <ArrowUpRight size={12} /></h3><p>{copy}</p></div></button></article>)}</div></div>
          <div className={styles.toolsAndRecords}><h2 id="tools" className={styles.sectionLabel}>TOOLS & TECHNOLOGIES <small>CLICK TO INSPECT</small></h2><div className={styles.toolGrid}>{equipment.map((item,index)=><div key={item.code}><button className={styles.toolButton} aria-pressed={activeTool===index} aria-controls="tool-inspector" onClick={()=>setActiveTool(activeTool===index ? null : index)} type="button"><span>{toolMarks[item.name]}</span><strong>{item.name}</strong></button></div>)}</div><div id="tool-inspector" className={styles.toolInspector} aria-live="polite">{activeTool !== null ? <><span>{equipment[activeTool].category}</span><h3>{equipment[activeTool].name}</h3><p>{equipment[activeTool].description}</p><div>{relatedProjects.length ? relatedProjects.map(project=><button type="button" key={project.id} onClick={event=>openProject(project,event.currentTarget)}>{project.title} <ArrowUpRight size={13} /></button>) : <a href="https://github.com/MIXThanakorn" target="_blank" rel="noreferrer">Explore my repositories <ArrowUpRight size={13} /></a>}</div></> : <p>Select a tool to see what I use it for and explore related builds.</p>}</div><div className={styles.records} id="recognition"><h2>RECOGNITION & MILESTONES</h2>{achievements.map((item,index)=><article key={item.title}><button className={styles.awardButton} type="button" onClick={event=>{opener.current=event.currentTarget;setActiveAward(index);}}><span><Award size={20} /></span><div><h3>{item.title}</h3><p>{item.issuer} <i /> {item.date}</p></div><ArrowUpRight size={16} /></button></article>)}</div></div>
        </section>

        <section className={styles.about} id="about"><span className={styles.eyebrow}>THE PERSON BEHIND THE PIXELS</span><h2>A curious mind.<br /><span>A builder at heart.</span></h2><div><p>I&apos;m Thanakorn Thongpraiwan, a Computer Science student exploring what happens when code meets curiosity.</p><p>From useful everyday apps to procedural simulations, I enjoy figuring out the problem, connecting the pieces, and making the result feel clear.</p></div></section>

        <section className={styles.process}><h2 className={styles.sectionLabel}>MY DEVELOPMENT PROCESS <small>SELECT A STEP</small></h2><div className={styles.processGrid}>{process.map(({title,copy,icon:Icon},index)=><article key={title}><button className={styles.processButton} type="button" aria-expanded={activeStep===index} aria-controls="process-detail" onClick={()=>setActiveStep(activeStep===index ? null : index)}><h3><span>0{index+1}</span>{title}</h3><p>{copy}</p><Icon size={30} strokeWidth={1} /></button></article>)}</div>{activeStep!==null && <div className={styles.processDetail} id="process-detail"><span>0{activeStep+1} / {process[activeStep].title}</span><p>{processDetails[activeStep]}</p><button type="button" onClick={()=>setActiveStep((activeStep+1)%process.length)}>NEXT STEP <ArrowRight size={15} /></button></div>}</section>

        <section className={styles.contact} id="contact"><div className={styles.contactShine} aria-hidden="true" /><h2>LET&apos;S CREATE<br />SOMETHING<br />EXTRAORDINARY<span>✦</span></h2><div className={styles.contactInvite}><p>Have a project, an internship,<br />or an idea worth exploring?</p><button className={styles.silverButton} type="button" onClick={event=>openContact(event.currentTarget)}>LET&apos;S WORK TOGETHER <ArrowUpRight size={17} /></button></div><div className={styles.contactLinks}><button type="button" onClick={event=>openContact(event.currentTarget)}><Mail size={17} />kjn09402@gmail.com</button><a href="https://github.com/MIXThanakorn" target="_blank" rel="noreferrer"><Github size={17} />MIXThanakorn</a><a href="https://instagram.com/lnw_mix" target="_blank" rel="noreferrer"><Instagram size={17} />lnw_mix</a></div></section>
        <footer className={styles.footer}><span>© {new Date().getFullYear()} Thanakorn Thongpraiwan.</span><div><small>LET&apos;S CONNECT</small><a href="https://github.com/MIXThanakorn" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://instagram.com/lnw_mix" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a><button type="button" onClick={event=>openContact(event.currentTarget)} aria-label="Email"><Mail size={18} /></button></div></footer>
      </div>

      <dialog className={styles.dialog} ref={dialog} onCancel={closeDialog} onClick={event=>{if(event.target===event.currentTarget)closeDialog();}} aria-label={selected ? `${selected.title} details` : contactOpen ? "Contact Thanakorn" : "Achievement details"}>
        {modalOpen && <button className={styles.closeDialog} type="button" onClick={closeDialog} aria-label="Close details"><X size={22} /></button>}
        {contactOpen && <div className={styles.simpleDialog}><span className={styles.eyebrow}>LET&apos;S CONNECT</span><h2>Have something<br />in mind?</h2><p>Send a project idea, internship opportunity, or a hello. Choose the channel that works for you.</p><div className={styles.emailAddress}>kjn09402@gmail.com</div><div className={styles.dialogActions}><button type="button" className={styles.silverButton} onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "COPIED" : "COPY EMAIL"}</button><a className={styles.quietButton} href="mailto:kjn09402@gmail.com">OPEN EMAIL APP <ArrowUpRight size={16} /></a></div><p className={styles.copyStatus} role="status">{copyMessage || "Open email app requires an email application configured on your device."}</p><a className={styles.contactAlternative} href="https://instagram.com/lnw_mix" target="_blank" rel="noreferrer"><Instagram size={18} /> Or find me on Instagram <ArrowUpRight size={16} /></a></div>}
        {activeAward!==null && <div className={styles.simpleDialog}><Award size={44} strokeWidth={1} /><span className={styles.eyebrow}>RECOGNITION / {achievements[activeAward].date}</span><h2>{achievements[activeAward].title}</h2><p>{achievements[activeAward].issuer}</p><p>{achievements[activeAward].description}</p></div>}
        {selected && <div className={styles.dialogContent}><div className={styles.dialogVisual}><ProjectPreview project={selected} /></div><div className={styles.dialogCopy}><span className={styles.eyebrow}>{selected.category} / SELECTED WORK</span><h2>{selected.title}</h2><p>{selected.description}</p><h3>THE IDEA</h3><p>{selected.concept}</p>{selected.features && <ul>{selected.features.map(feature=><li key={feature}>{feature}</li>)}</ul>}<div className={styles.tags}>{selected.technologies.map(technology=><span key={technology}>{technology}</span>)}</div><div className={styles.dialogActions}>{selected.demo && <a className={styles.silverButton} href={selected.demo} target="_blank" rel="noreferrer">EXPLORE LIVE <ArrowUpRight size={16} /></a>}<a className={styles.quietButton} href={selected.source} target="_blank" rel="noreferrer">VIEW SOURCE <Github size={16} /></a></div>{!selected.demo && <p className={styles.demoNote}>Source code is available on GitHub. A hosted demo is not listed for this project.</p>}<div className={styles.projectPagination}><button type="button" onClick={()=>setSelected(projects[(projects.findIndex(p=>p.id===selected.id)+projects.length-1)%projects.length])}>← PREVIOUS</button><span>{projects.findIndex(p=>p.id===selected.id)+1} / {projects.length}</span><button type="button" onClick={()=>setSelected(projects[(projects.findIndex(p=>p.id===selected.id)+1)%projects.length])}>NEXT →</button></div></div></div>}
      </dialog>
    </main>
  );
}
