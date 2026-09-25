"use client";

import { useEffect, useRef } from "react";

export default function PlaygroundEffects() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const cursor = cursorRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let activeCard: HTMLElement | null = null;
    let cursorFrame = 0;
    let scrollFrame = 0;
    let pointerX = -40;
    let pointerY = -40;

    const updateScroll = () => {
      scrollFrame = 0;
      const available =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = available > 0 ? window.scrollY / available : 0;
      root.style.setProperty(
        "--page-progress",
        String(Math.min(1, Math.max(0, progress))),
      );
    };

    const requestScrollUpdate = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScroll);
    };

    const updateCursor = () => {
      cursorFrame = 0;
      if (!cursor) return;
      cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
    };

    const resetCard = (card: HTMLElement | null) => {
      card?.style.removeProperty("--signal-x");
      card?.style.removeProperty("--signal-y");
      card?.style.removeProperty("--visual-x");
      card?.style.removeProperty("--visual-y");
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!finePointer.matches || reducedMotion.matches) return;

      pointerX = event.clientX - 5;
      pointerY = event.clientY - 5;
      if (!cursorFrame) {
        cursorFrame = window.requestAnimationFrame(updateCursor);
      }

      const target = event.target instanceof Element ? event.target : null;
      cursor?.classList.toggle(
        "is-over-action",
        Boolean(target?.closest("a, button, [role='tab']")),
      );

      const nextCard = target?.closest<HTMLElement>(".project-card article") ?? null;
      if (activeCard !== nextCard) {
        resetCard(activeCard);
        activeCard = nextCard;
      }
      if (!activeCard) return;

      const rect = activeCard.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;
      activeCard.style.setProperty("--signal-x", `${relativeX * 100}%`);
      activeCard.style.setProperty("--signal-y", `${relativeY * 100}%`);
      activeCard.style.setProperty("--visual-x", `${(relativeX - 0.5) * -8}px`);
      activeCard.style.setProperty("--visual-y", `${(relativeY - 0.5) * -8}px`);
    };

    const handlePointerLeave = () => {
      pointerX = -40;
      pointerY = -40;
      cursor?.classList.remove("is-over-action");
      resetCard(activeCard);
      activeCard = null;
      if (!cursorFrame) cursorFrame = window.requestAnimationFrame(updateCursor);
    };

    updateScroll();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      window.cancelAnimationFrame(cursorFrame);
      window.cancelAnimationFrame(scrollFrame);
      resetCard(activeCard);
      root.style.removeProperty("--page-progress");
    };
  }, []);

  return (
    <>
      <span className="scroll-signal" aria-hidden="true" />
      <span className="signal-cursor" aria-hidden="true" ref={cursorRef} />
    </>
  );
}
