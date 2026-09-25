"use client";

import { useEffect, useState } from "react";

const messages = [
  "BUILDING SOMETHING",
  "CONNECTING IDEAS",
  "LEARNING BY MAKING",
] as const;

export default function SignalStatus() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(
      () => setIndex((current) => (current + 1) % messages.length),
      2800,
    );
    return () => window.clearInterval(interval);
  }, []);

  return (
    <strong aria-live="polite">
      <i />
      <span className="signal-status-text" key={messages[index]}>
        {messages[index]}
      </span>
    </strong>
  );
}
