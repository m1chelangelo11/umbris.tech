export default function SecTag({ children, className = '' }) {
  return (
    <p
      className={`flex items-center gap-[0.55rem] font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-dim before:h-px before:w-[14px] before:shrink-0 before:bg-accent before:content-[''] ${className}`}
    >
      {children}
    </p>
  )
}
