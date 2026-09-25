"use client";

import { type CSSProperties, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const groups = [
  {
    id: "web",
    label: "Web",
    note: "Interfaces and full-stack web apps",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    projects: "Track Your Task",
  },
  {
    id: "mobile",
    label: "Mobile",
    note: "Cross-platform ideas that live in your pocket",
    tools: ["React Native", "Expo", "Flutter"],
    projects: "Run Tracker · LocoMall · Money Tracking",
  },
  {
    id: "data",
    label: "Data / Backend",
    note: "Data, APIs, and the systems behind the screen",
    tools: ["Python", "Supabase", "Machine Learning", "Data Analysis"],
    projects: "Mental Health Analyzer",
  },
] as const;

export default function ToolboxSection() {
  const [activeId, setActiveId] = useState<(typeof groups)[number]["id"]>("web");
  const activeGroup = groups.find((group) => group.id === activeId) ?? groups[0];

  return (
    <section className="section toolbox-section" aria-labelledby="toolbox-title">
      <div className="site-shell">
        <AnimatedSection className="section-head">
          <div>
            <p className="section-index">03 / TOOLBOX</p>
            <h2 className="section-title" id="toolbox-title">Things I work with.</h2>
          </div>
          <p className="section-intro">
            Not a skill meter. Just the tools I keep reaching for when I build.
          </p>
        </AnimatedSection>

        <AnimatedSection className="toolbox-panel" delay={1}>
          <div className="toolbox-tabs" role="tablist" aria-label="Technology groups">
            {groups.map((group, index) => (
              <button
                aria-controls={`toolbox-panel-${group.id}`}
                aria-selected={activeId === group.id}
                className="toolbox-tab"
                id={`toolbox-tab-${group.id}`}
                key={group.id}
                onClick={() => setActiveId(group.id)}
                role="tab"
                type="button"
              >
                <span>0{index + 1}</span>
                {group.label}
              </button>
            ))}
          </div>

          <div
            aria-labelledby={`toolbox-tab-${activeGroup.id}`}
            className="toolbox-content"
            id={`toolbox-panel-${activeGroup.id}`}
            role="tabpanel"
          >
            <div>
              <p className="toolbox-note">{activeGroup.note}</p>
              <div className="tool-cloud">
                {activeGroup.tools.map((tool, index) => (
                  <span key={tool} style={{ "--tool-delay": `${index * 55}ms` } as CSSProperties}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="toolbox-connection">
              <span>USED IN</span>
              <strong>{activeGroup.projects}</strong>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
