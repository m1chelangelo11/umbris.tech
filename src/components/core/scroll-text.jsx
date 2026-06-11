import { useRef } from 'react'
import { useInView } from 'motion/react'
import { TextEffect } from '@/components/core/text-effect'
import { lineRevealVariants } from './text-effect-variants'
import { useScrollSection } from './useScrollSection'

function normalizeLineText(text) {
  if (text.includes('\n')) return text

  const sentences = text.split(/(?<=[.!?])\s+/).filter((s) => s.trim())
  if (sentences.length > 1) {
    return sentences.join('\n')
  }

  return text
}

/**
 * Animacja linia po linii. W ScrollSection — wspólny trigger sekcji.
 * Poza sekcją (np. hero) — własny trigger przy scrollu.
 */
export function ScrollText({
  children,
  className = '',
  as = 'p',
  per = 'line',
  variants = lineRevealVariants,
  segmentWrapperClassName = 'overflow-hidden block',
  once = true,
  amount = 0.35,
  margin = '0px 0px -10% 0px',
  inline = false,
}) {
  const sectionInView = useScrollSection()
  const ownRef = useRef(null)
  const ownInView = useInView(ownRef, { once, amount, margin })

  const trigger = sectionInView !== null ? sectionInView : ownInView

  const content =
    typeof children === 'string' ? normalizeLineText(children) : children

  const wrapperClass = inline
    ? 'inline-block w-auto max-w-full'
    : 'w-full'

  if (sectionInView !== null) {
    return (
      <div className={wrapperClass}>
        <TextEffect
          trigger={trigger}
          per={per}
          as={as}
          className={className}
          variants={variants}
          segmentWrapperClassName={segmentWrapperClassName}
        >
          {content}
        </TextEffect>
      </div>
    )
  }

  return (
    <div ref={ownRef} className={wrapperClass}>
      <TextEffect
        trigger={trigger}
        per={per}
        as={as}
        className={className}
        variants={variants}
        segmentWrapperClassName={segmentWrapperClassName}
      >
        {content}
      </TextEffect>
    </div>
  )
}
