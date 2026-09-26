export default function EnergyCore({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`energy-core ${compact ? "energy-core-compact" : ""}`} aria-hidden="true">
      <div className="core-orbit core-orbit-a"><i /><i /><i /></div>
      <div className="core-orbit core-orbit-b"><i /><i /></div>
      <div className="core-shell"><span /><span /><span /></div>
      <div className="core-center"><b>TT</b><small>WORLD / 01</small></div>
      <div className="core-floor" />
    </div>
  );
}
