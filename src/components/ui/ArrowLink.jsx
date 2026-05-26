import { ScrollText } from '@/components/core/scroll-text'

export default function ArrowLink({ children, className = '', href = '#' }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 font-beausite-medium text-[18px] leading-none tracking-tight-display transition-opacity hover:opacity-70 ${className}`}
    >
      <ScrollText as="span" inline>
        {typeof children === 'string' ? children : String(children)}
      </ScrollText>
      <svg
        width="19"
        height="21"
        viewBox="0 0 19 21"
        fill="none"
        className="shrink-0 transition-transform group-hover:translate-x-0.5"
        aria-hidden
      >
        <path
          d="M2 10.5H16M16 10.5L10 4.5M16 10.5L10 16.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}
