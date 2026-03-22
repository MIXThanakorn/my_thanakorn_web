"use client";

import { useInView } from "react-intersection-observer";
import { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  style?: CSSProperties;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  style,
}: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "visible" : ""} ${delayClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
