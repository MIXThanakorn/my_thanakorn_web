interface SignalPathProps {
  className?: string;
  compact?: boolean;
  activeStep?: number;
}

const nodes = [
  { x: 42, y: 68, label: "START" },
  { x: 138, y: 34, label: "IDEA" },
  { x: 220, y: 116, label: "BUILD" },
  { x: 318, y: 62, label: "SHIP" },
  { x: 394, y: 152, label: "NEXT" },
];

export default function SignalPath({
  className = "",
  compact = false,
  activeStep = -1,
}: SignalPathProps) {
  return (
    <svg
      aria-hidden="true"
      className={`signal-path ${compact ? "signal-path-compact" : ""} ${className}`}
      viewBox="0 0 440 210"
      role="img"
    >
      <defs>
        <pattern id="signal-grid" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" className="signal-grid-dot" />
        </pattern>
      </defs>
      <rect width="440" height="210" fill="url(#signal-grid)" />
      <path
        className="signal-line signal-line-ghost"
        d="M42 68 L138 34 L220 116 L318 62 L394 152"
      />
      <path
        className="signal-line signal-line-live"
        d="M42 68 L138 34 L220 116 L318 62 L394 152"
        pathLength="1"
      />
      <path className="signal-branch" d="M138 34 L172 166 L287 174 L318 62" />
      <circle className="signal-traveller" r="4">
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          path="M42 68 L138 34 L220 116 L318 62 L394 152"
        />
      </circle>
      {nodes.map((node, index) => (
        <g
          className={`signal-node ${index === activeStep ? "is-active" : ""}`}
          key={node.label}
          transform={`translate(${node.x} ${node.y})`}
        >
          <circle className="signal-node-ring" r="11" />
          <circle className="signal-node-core" r="4" />
          {!compact && (
            <text x="0" y="25" textAnchor="middle">
              {String(index + 1).padStart(2, "0")} / {node.label}
            </text>
          )}
        </g>
      ))}
      {!compact && (
        <>
          <text className="signal-caption" x="20" y="196">SIGNAL_PATH // THANAKORN</text>
          <text className="signal-caption" x="420" y="196" textAnchor="end">BUILD · LEARN · REPEAT</text>
        </>
      )}
    </svg>
  );
}
